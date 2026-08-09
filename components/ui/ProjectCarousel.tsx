"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type PublishedProject = Project & { url: string };

type DragState = {
  active: boolean;
  dragging: boolean;
  pointerId: number;
  pointerType: string;
  startX: number;
  startScrollLeft: number;
  moved: number;
};

const idleDrag: DragState = {
  active: false,
  dragging: false,
  pointerId: -1,
  pointerType: "",
  startX: 0,
  startScrollLeft: 0,
  moved: 0,
};

const dragThreshold = 16;

export function ProjectCarousel({ projects }: { projects: PublishedProject[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const segmentWidthRef = useRef(0);
  const startLoopRef = useRef<() => void>(() => undefined);
  const stopLoopRef = useRef<() => void>(() => undefined);
  const resumeTimerRef = useRef<number | null>(null);
  const resumeAtRef = useRef(0);
  const focusWithinRef = useRef(false);
  const visibleRef = useRef(true);
  const dialogOpenRef = useRef(false);
  const dialogInputRef = useRef<"pointer" | "keyboard">("pointer");
  const suppressClickUntilRef = useRef(0);
  const dragRef = useRef<DragState>({ ...idleDrag });
  const [dragging, setDragging] = useState(false);
  const [pendingProject, setPendingProject] = useState<PublishedProject | null>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;

    let animationFrame = 0;
    let normalizationFrame = 0;
    let initialized = false;
    let last = performance.now();
    let precisePosition = 0;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const normalizeNativeScroll = () => {
      const width = segmentWidthRef.current;
      if (width <= 0) return;
      if (viewport.scrollLeft < width * 0.25) viewport.scrollLeft += width;
      else if (viewport.scrollLeft >= width * 1.75) viewport.scrollLeft -= width;
      precisePosition = viewport.scrollLeft;
    };

    const queueNormalization = () => {
      if (animationFrame && !dragRef.current.active) return;
      if (normalizationFrame) return;
      normalizationFrame = requestAnimationFrame(() => {
        normalizationFrame = 0;
        normalizeNativeScroll();
      });
    };

    const canRun = () =>
      segmentWidthRef.current > 0 &&
      !focusWithinRef.current &&
      !dragRef.current.active &&
      !dialogOpenRef.current &&
      visibleRef.current &&
      !document.hidden &&
      !motionQuery.matches;

    const stop = () => {
      if (!animationFrame) return;
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const tick = (now: number) => {
      animationFrame = 0;
      if (!canRun()) return;
      const elapsed = Math.min((now - last) / 1000, 0.05);
      last = now;
      precisePosition += 27 * elapsed;
      const width = segmentWidthRef.current;
      if (precisePosition < width * 0.25) precisePosition += width;
      else if (precisePosition >= width * 1.75) precisePosition -= width;
      viewport.scrollLeft = precisePosition;
      animationFrame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!canRun() || animationFrame) return;
      const remaining = resumeAtRef.current - performance.now();
      if (remaining > 0) {
        if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = window.setTimeout(() => {
          resumeTimerRef.current = null;
          start();
        }, remaining);
        return;
      }
      last = performance.now();
      animationFrame = requestAnimationFrame(tick);
    };

    const measure = () => {
      const previousWidth = segmentWidthRef.current;
      const nextWidth = group.offsetWidth;
      if (nextWidth <= 0) return;
      segmentWidthRef.current = nextWidth;
      if (!initialized || previousWidth <= 0) {
        viewport.scrollLeft = nextWidth;
        precisePosition = nextWidth;
        initialized = true;
      } else {
        const positionWithinSegment = ((viewport.scrollLeft - previousWidth) % previousWidth + previousWidth) % previousWidth;
        viewport.scrollLeft = nextWidth + positionWithinSegment * (nextWidth / previousWidth);
        precisePosition = viewport.scrollLeft;
      }
      start();
    };

    startLoopRef.current = start;
    stopLoopRef.current = stop;

    const resize = new ResizeObserver(measure);
    const intersection = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.02 },
    );
    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    const handleMotionPreference = () => {
      if (motionQuery.matches) stop();
      else start();
    };

    resize.observe(group);
    intersection.observe(viewport);
    viewport.addEventListener("scroll", queueNormalization, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery.addEventListener("change", handleMotionPreference);
    measure();

    return () => {
      stop();
      if (normalizationFrame) cancelAnimationFrame(normalizationFrame);
      if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
      resize.disconnect();
      intersection.disconnect();
      viewport.removeEventListener("scroll", queueNormalization);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotionPreference);
      startLoopRef.current = () => undefined;
      stopLoopRef.current = () => undefined;
    };
  }, []);

  useEffect(() => {
    const clearStaleDialog = () => {
      dialogOpenRef.current = false;
      setPendingProject(null);
    };
    window.addEventListener("pageshow", clearStaleDialog);
    return () => window.removeEventListener("pageshow", clearStaleDialog);
  }, []);

  const scheduleResume = (delay: number) => {
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    resumeAtRef.current = performance.now() + delay;
    resumeTimerRef.current = window.setTimeout(() => {
      resumeTimerRef.current = null;
      startLoopRef.current();
    }, delay);
  };

  const requestProjectVisit = (project: PublishedProject, input: "pointer" | "keyboard") => {
    if (dialogOpenRef.current || performance.now() <= suppressClickUntilRef.current) return;
    dialogInputRef.current = input;
    stopLoopRef.current();
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    dialogOpenRef.current = true;
    setPendingProject(project);
  };

  const closeVisitDialog = () => {
    dialogOpenRef.current = false;
    setPendingProject(null);
    requestAnimationFrame(() => {
      const activeElement = document.activeElement;
      if (dialogInputRef.current === "pointer" && activeElement instanceof HTMLElement && activeElement.closest(".project-tile")) {
        activeElement.blur();
      }
      focusWithinRef.current = false;
      scheduleResume(700);
    });
  };

  const confirmProjectVisit = () => {
    if (!pendingProject) return;
    const destination = pendingProject.url;
    closeVisitDialog();
    window.open(destination, "_blank", "noopener,noreferrer");
  };

  const beginDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    stopLoopRef.current();
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    dragRef.current = {
      active: true,
      dragging: false,
      pointerId: event.pointerId,
      pointerType: event.pointerType,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
      moved: 0,
    };
  };

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;
    const delta = event.clientX - drag.startX;
    drag.moved = Math.max(drag.moved, Math.abs(delta));

    if (!drag.dragging) {
      if (drag.moved <= dragThreshold) return;
      drag.dragging = true;
      setDragging(true);
      if (drag.pointerType === "mouse") event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (drag.pointerType !== "mouse") return;
    event.preventDefault();
    if (viewportRef.current) viewportRef.current.scrollLeft = drag.startScrollLeft - delta;
  };

  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;
    const didDrag = drag.dragging;
    dragRef.current = { ...idleDrag };
    setDragging(false);
    if (didDrag) suppressClickUntilRef.current = performance.now() + 450;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    scheduleResume(didDrag ? 1500 : 700);
  };

  return (
    <div className="project-carousel">
      <div className="shell project-carousel__controls">
        <p className="text-sm text-ink-600">Arraste para explorar · movimento contínuo</p>
      </div>

      <div
        ref={viewportRef}
        className="project-carousel__viewport"
        data-dragging={dragging}
        role="region"
        aria-label="Projetos publicados em carrossel"
        onPointerDownCapture={beginDrag}
        onPointerMove={moveDrag}
        onPointerUpCapture={finishDrag}
        onPointerCancel={finishDrag}
        onLostPointerCapture={finishDrag}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") stopLoopRef.current();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse" && !dragRef.current.active && !focusWithinRef.current) scheduleResume(700);
        }}
        onDragStart={(event) => event.preventDefault()}
        onFocusCapture={() => {
          focusWithinRef.current = true;
          stopLoopRef.current();
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            focusWithinRef.current = false;
            scheduleResume(700);
          }
        }}
      >
        <div className="project-carousel__track">
          <div className="project-carousel__group" aria-hidden="true">
            {projects.map((project) => (
              <ProjectCard key={`previous-${project.slug}`} project={project} duplicate onVisit={requestProjectVisit} />
            ))}
          </div>
          <div ref={groupRef} className="project-carousel__group">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} onVisit={requestProjectVisit} />
            ))}
          </div>
          <div className="project-carousel__group" aria-hidden="true">
            {projects.map((project) => (
              <ProjectCard key={`next-${project.slug}`} project={project} duplicate onVisit={requestProjectVisit} />
            ))}
          </div>
        </div>
      </div>

      {pendingProject ? (
        <div
          className="project-visit-dialog"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) closeVisitDialog();
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeVisitDialog();
          }}
        >
          <section
            className="project-visit-dialog__surface"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-visit-title"
            aria-describedby="project-visit-description"
          >
            <p className="project-visit-dialog__domain">
              {pendingProject.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
            </p>
            <h3 id="project-visit-title" className="display">Quer visitar este site?</h3>
            <p id="project-visit-description">Você será levado para o site de {pendingProject.name} em uma nova aba.</p>
            <div className="project-visit-dialog__actions">
              <button type="button" className="project-visit-dialog__cancel" onClick={closeVisitDialog} autoFocus>
                Continuar aqui
              </button>
              <button type="button" className="project-visit-dialog__confirm" onClick={confirmProjectVisit}>
                Visitar site
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
