import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

/** Seta diagonal usada em links externos e CTAs. */
export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M5.5 4.5h6v6" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2.5 8h11" />
      <path d="M9.5 4 13.5 8l-4 4" />
    </svg>
  );
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.5 8h-11" />
      <path d="M6.5 4 2.5 8l4 4" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="12" cy="12" r="3.75" />
      <path d="M12 2.5v2M12 19.5v2M5.28 5.28l1.42 1.42M17.3 17.3l1.42 1.42M2.5 12h2M19.5 12h2M5.28 18.72l1.42-1.42M17.3 6.7l1.42-1.42" />
    </StrokeIcon>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M20.5 14.8A8.6 8.6 0 0 1 9.2 3.5 8.6 8.6 0 1 0 20.5 14.8Z" />
    </StrokeIcon>
  );
}

function StrokeIcon({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </StrokeIcon>
  );
}

export function LocationIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </StrokeIcon>
  );
}

export function IdeaIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <path d="M12 2v2M4.93 4.93l1.42 1.42M2 12h2M19.07 4.93l-1.42 1.42M20 12h2" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8.3 14.4A6 6 0 1 1 15.7 14.4C14.6 15.2 14 16.1 14 18h-4c0-1.9-.6-2.8-1.7-3.6Z" />
    </StrokeIcon>
  );
}

export function StructureIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
      <path d="M6.5 10v2h11v-2M12 12v2" />
    </StrokeIcon>
  );
}

export function ResultIcon({ className }: IconProps) {
  return (
    <StrokeIcon className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="m14.2 9.8 5.3-5.3M16 4.5h3.5V8" />
    </StrokeIcon>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.18-1.36a9.93 9.93 0 0 0 4.86 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.13h-.01a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.23 8.23 0 0 1-1.26-4.4c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.85c0 4.57-3.71 8.26-8.28 8.26Zm4.54-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.63.8-.78.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35 1 2.51c.12.17 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
