"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type PublishedProject = Project & { url: string };

export function ProjectCarousel({ projects }: { projects: PublishedProject[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const segmentWidthRef = useRef(0);
  const startLoopRef = useRef<() => void>(() => undefined);
  const stopLoopRef = useRef<() => void>(() => undefined);
  const paintRef = useRef<() => void>(() => undefined);
  const queuePaintRef = useRef<() => void>(() => undefined);
  const resumeTimerRef = useRef<number | null>(null);
  const dragPaintFrameRef = useRef<number | null>(null);
  const dragRef = useRef({
    active: false,
    started: false,
    pointerId: -1,
    startX: 0,
    startPosition: 0,
    moved: 0,
  });
  const resumeAtRef = useRef(0);
  const focusWithinRef = useRef(false);
  const visibleRef = useRef(true);
  const suppressClickUntilRef = useRef(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dragging, setDragging] = useState(false);
  const [pendingProject, setPendingProject] = useState<PublishedProject | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (pendingProject && dialog && !dialog.open) dialog.showModal();
  }, [pendingProject]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const group = groupRef.current;
    if (!viewport || !track || !group) return;

    let frame = 0;
    let last = performance.now();
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const paint = () => {
      const width = segmentWidthRef.current;
      if (width > 0) {
        positionRef.current = ((positionRef.current % width) + width) % width;
      }
      track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
    };

    const queuePaint = () => {
      if (dragPaintFrameRef.current !== null) return;
      dragPaintFrameRef.current = requestAnimationFrame(() => {
        dragPaintFrameRef.current = null;
        paint();
      });
    };

    const canRun = () =>
      segmentWidthRef.current > 0 &&
      !focusWithinRef.current &&
      !dragRef.current.active &&
      visibleRef.current &&
      !document.hidden &&
      !motionQuery.matches;

    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const tick = (now: number) => {
      frame = 0;
      if (!canRun()) return;

      const elapsed = Math.min((now - last) / 1000, 0.05);
      last = now;
      positionRef.current += 27 * elapsed;
      paint();
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!canRun() || frame) return;

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
      frame = requestAnimationFrame(tick);
    };

    startLoopRef.current = start;
    stopLoopRef.current = stop;
    paintRef.current = paint;
    queuePaintRef.current = queuePaint;

    const resize = new ResizeObserver(() => {
      segmentWidthRef.current = group.offsetWidth;
      paint();
      start();
    });
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
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery.addEventListener("change", handleMotionPreference);
    segmentWidthRef.current = group.offsetWidth;
    paint();
    start();

    return () => {
      stop();
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
      if (dragPaintFrameRef.current !== null) {
        cancelAnimationFrame(dragPaintFrameRef.current);
        dragPaintFrameRef.current = null;
      }
      resize.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotionPreference);
      startLoopRef.current = () => undefined;
      stopLoopRef.current = () => undefined;
      paintRef.current = () => undefined;
      queuePaintRef.current = () => undefined;
    };
  }, []);

  const scheduleResume = (delay: number) => {
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    resumeAtRef.current = performance.now() + delay;
    resumeTimerRef.current = window.setTimeout(() => {
      resumeTimerRef.current = null;
      startLoopRef.current();
    }, delay);
  };

  const requestProjectVisit = (project: PublishedProject) => {
    stopLoopRef.current();
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setPendingProject(project);
  };

  const closeVisitDialog = () => {
    dialogRef.current?.close();
  };

  const confirmProjectVisit = () => {
    if (!pendingProject) return;
    window.open(pendingProject.url, "_blank", "noopener,noreferrer");
    closeVisitDialog();
  };

  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;

    const didDrag = drag.started || drag.moved > 7;
    drag.active = false;
    drag.started = false;
    setDragging(false);
    if (didDrag) suppressClickUntilRef.current = performance.now() + 320;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    scheduleResume(didDrag ? 1100 : 700);
  };

  const beginDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    stopLoopRef.current();
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    dragRef.current = {
      active: true,
      started: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startPosition: positionRef.current,
      moved: 0,
    };
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
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") stopLoopRef.current();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse" && !dragRef.current.active && !focusWithinRef.current) {
            scheduleResume(700);
          }
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current;
          if (!drag.active || drag.pointerId !== event.pointerId) return;
          const delta = event.clientX - drag.startX;
          drag.moved = Math.abs(delta);
          if (drag.moved <= 7) return;
          event.preventDefault();
          if (!drag.started) {
            drag.started = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            setDragging(true);
          }
          positionRef.current = drag.startPosition - delta;
          queuePaintRef.current();
        }}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onLostPointerCapture={finishDrag}
        onClickCapture={(event) => {
          if (performance.now() > suppressClickUntilRef.current) return;
          event.preventDefault();
          event.stopPropagation();
          suppressClickUntilRef.current = 0;
        }}
        onDragStart={(event) => event.preventDefault()}
        onFocusCapture={(event) => {
          focusWithinRef.current = true;
          stopLoopRef.current();
          if (dragRef.current.active) return;

          const card = (event.target as HTMLElement).closest<HTMLElement>(".project-tile");
          if (!card) return;
          const viewportBounds = event.currentTarget.getBoundingClientRect();
          const cardBounds = card.getBoundingClientRect();
          const inset = 20;

          if (cardBounds.left < viewportBounds.left + inset) {
            positionRef.current -= viewportBounds.left + inset - cardBounds.left;
          } else if (cardBounds.right > viewportBounds.right - inset) {
            positionRef.current += cardBounds.right - (viewportBounds.right - inset);
          }
          paintRef.current();
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            focusWithinRef.current = false;
            scheduleResume(700);
          }
        }}
      >
        <div ref={trackRef} className="project-carousel__track">
          <div ref={groupRef} className="project-carousel__group">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} onVisit={requestProjectVisit} />
            ))}
          </div>
          <div className="project-carousel__group" aria-hidden="true">
            {projects.map((project) => (
              <ProjectCard key={`duplicate-${project.slug}`} project={project} duplicate onVisit={requestProjectVisit} />
            ))}
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="project-visit-dialog"
        aria-labelledby="project-visit-title"
        aria-describedby="project-visit-description"
        onCancel={(event) => {
          event.preventDefault();
          closeVisitDialog();
        }}
        onClose={() => {
          setPendingProject(null);
          scheduleResume(700);
        }}
      >
        {pendingProject ? (
          <div className="project-visit-dialog__surface">
            <p className="project-visit-dialog__domain">
              {pendingProject.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
            </p>
            <h3 id="project-visit-title" className="display">
              Quer visitar este site?
            </h3>
            <p id="project-visit-description">
              Você será levado para o site de {pendingProject.name} em uma nova aba.
            </p>
            <div className="project-visit-dialog__actions">
              <button type="button" className="project-visit-dialog__cancel" onClick={closeVisitDialog} autoFocus>
                Continuar aqui
              </button>
              <button type="button" className="project-visit-dialog__confirm" onClick={confirmProjectVisit}>
                Visitar site
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
