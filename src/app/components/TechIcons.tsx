import React from "react";

// SVG tech icons as React components
export function ReactIcon({ size = 24, color = "#61DAFB" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.2" fill={color} />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function PythonIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M11.9 2C7.3 2 7.7 4 7.7 4l.01 2.1H12v.6H5.5S2 6.3 2 11.9s3.05 5.4 3.05 5.4H6.8v-2.6s-.13-3.05 3-3.05h5.17s2.9.05 2.9-2.8V4.8S18.3 2 11.9 2zm-2.87 1.6a.93.93 0 110 1.86.93.93 0 010-1.86z" fill="#3776AB" />
      <path d="M12.1 22c4.6 0 4.2-2 4.2-2l-.01-2.1H12v-.6h6.5S22 17.7 22 12.1s-3.05-5.4-3.05-5.4H17.2v2.6s.13 3.05-3 3.05H9.03s-2.9-.05-2.9 2.8v4.05S5.7 22 12.1 22zm2.87-1.6a.93.93 0 110-1.86.93.93 0 010 1.86z" fill="#FFD43B" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6" />
      <path d="M13.5 16.5v1.75c.3.15.65.27 1.05.35.4.08.8.12 1.2.12.4 0 .77-.05 1.12-.15.35-.1.65-.25.9-.45.25-.2.45-.44.6-.73.14-.29.21-.62.21-1 0-.27-.04-.51-.12-.72a1.8 1.8 0 00-.36-.57 2.5 2.5 0 00-.56-.45c-.22-.14-.46-.27-.74-.4a6.3 6.3 0 01-.56-.28c-.16-.1-.28-.2-.38-.3a1 1 0 01-.22-.33.95.95 0 01-.07-.37c0-.13.03-.25.08-.36.06-.1.14-.2.24-.27.1-.08.23-.14.38-.18.15-.04.32-.06.5-.06.14 0 .28.01.43.04.15.03.3.07.44.13.15.05.28.12.41.2.12.08.23.17.33.27V10.5a3.5 3.5 0 00-.88-.25 5.6 5.6 0 00-1-.09c-.4 0-.76.05-1.1.16-.34.1-.63.26-.87.47-.24.2-.43.45-.57.74-.13.29-.2.62-.2.98 0 .45.11.84.33 1.16.22.32.56.6 1.02.84.23.12.43.23.62.34.18.1.34.21.47.33.13.11.23.23.3.37.07.13.1.28.1.45 0 .12-.02.24-.07.35-.05.11-.12.2-.22.28-.1.08-.22.14-.37.18-.15.05-.33.07-.53.07a2.8 2.8 0 01-1.2-.29 3 3 0 01-.53-.3zM6.5 12h2v7h1.75v-7h2v-1.5H6.5V12z" fill="white" />
    </svg>
  );
}

export function DockerIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13.98 11.08h2.12v-1.9h-2.12v1.9zm-2.5 0h2.12v-1.9h-2.12v1.9zm-2.5 0h2.12v-1.9H8.98v1.9zm-2.5 0h2.12v-1.9H6.48v1.9zm2.5-2.3h2.12V6.88H8.98v1.9zm2.5 0h2.12V6.88h-2.12v1.9zm2.5 0h2.12V6.88h-2.12v1.9zm-2.5-2.3h2.12V4.58h-2.12v1.9zm2.5 0h2.12V4.58h-2.12v1.9z" fill="#2496ED" />
      <path d="M23.43 11.45c-.46-.31-1.52-.42-2.33-.27-.1-.79-.52-1.48-1.27-2.1l-.43-.29-.3.42c-.38.57-.6 1.36-.54 2.13.03.29.13.8.42 1.25-.3.16-.87.38-1.64.37H.57l-.05.32c-.15.98-.15 4.04 2.3 6.38C4.7 21.5 7.2 22.2 10.33 22.2c6.82 0 11.87-3.13 14.24-8.83.93.02 2.93 0 3.95-1.96l.05-.1-.4-.26z" fill="#2496ED" />
    </svg>
  );
}

export function PostgresIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17.13 4.15c-1.27-.64-2.73-.98-4.13-.98-1.63 0-3.12.48-4.2 1.35-1.1.88-1.72 2.1-1.72 3.52 0 .67.15 1.33.44 1.92.26.53.62 1 1.08 1.4-.1.48-.26 1.17-.3 1.56-.1.84-.02 1.52.24 2.08.27.57.73 1.02 1.4 1.3-.01.4.02.82.1 1.24.18.9.58 1.64 1.2 2.18.63.55 1.42.82 2.36.82.75 0 1.5-.2 2.13-.6.62-.38 1.09-.93 1.35-1.56l.06-.16c.8-.2 1.48-.6 2-1.16.6-.66.93-1.5.93-2.42 0-.32-.05-.63-.15-.93.55-.68.87-1.52.87-2.4 0-.36-.05-.73-.16-1.07.35-.7.53-1.48.53-2.28 0-1.28-.53-2.44-1.5-3.36a3.2 3.2 0 00-.33-.29z" fill="none" stroke="#336791" strokeWidth="1.2" />
      <ellipse cx="10.5" cy="9" rx="1" ry="1.3" fill="#336791" />
      <ellipse cx="14.5" cy="9" rx="1" ry="1.3" fill="#336791" />
    </svg>
  );
}

export function RedisIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.5 13.77c0 1.07-4.7 1.93-10.5 1.93S1.5 14.84 1.5 13.77s4.7-1.93 10.5-1.93 10.5.86 10.5 1.93z" fill="#A41E11" opacity="0.5" />
      <path d="M22.5 11.27c0 1.07-4.7 1.93-10.5 1.93S1.5 12.34 1.5 11.27s4.7-1.93 10.5-1.93 10.5.86 10.5 1.93z" fill="#D82C20" opacity="0.7" />
      <path d="M22.5 8.77c0 1.07-4.7 1.93-10.5 1.93S1.5 9.84 1.5 8.77s4.7-1.93 10.5-1.93S22.5 7.7 22.5 8.77z" fill="#D82C20" />
      <path d="M15 8.3l-3-1.5-3 1.5 3 1.5 3-1.5z" fill="#FFF" opacity="0.8" />
    </svg>
  );
}

export function FastAPIIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#009688" />
      <path d="M8 17V7h6l-3.5 5H14l-6 5z" fill="white" />
    </svg>
  );
}

export function GitHubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#94A3B8" />
    </svg>
  );
}

export function AWSIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M7.16 13.41c0 .26.03.47.08.63.06.16.13.33.23.52.04.06.05.12.05.17 0 .07-.05.15-.14.22l-.47.31c-.07.04-.13.06-.19.06-.07 0-.15-.04-.22-.11a2.27 2.27 0 01-.26-.34 5.7 5.7 0 01-.23-.42c-.57.67-1.28 1.01-2.14 1.01-.61 0-1.1-.17-1.46-.52-.36-.35-.54-.82-.54-1.4 0-.62.22-1.12.66-1.5.44-.39 1.03-.58 1.78-.58.25 0 .5.02.77.06.27.04.54.1.83.17v-.53c0-.55-.12-.94-.35-1.17-.24-.23-.64-.34-1.22-.34-.26 0-.53.03-.81.1-.28.07-.55.15-.82.26-.12.05-.21.08-.26.1a.45.45 0 01-.1.02c-.09 0-.13-.06-.13-.2v-.37c0-.1.01-.18.04-.22a.46.46 0 01.16-.12c.26-.14.58-.25.95-.34.37-.1.76-.14 1.18-.14.9 0 1.56.2 1.98.61.41.41.62 1.03.62 1.86v2.45z" fill="#F59E0B" />
      <path d="M14.37 13.56l-1.73-5.74a2.24 2.24 0 01-.09-.48c0-.14.07-.21.2-.21h.77c.15 0 .25.02.3.07.06.04.1.14.13.28l1.24 4.87 1.15-4.87c.03-.15.07-.24.13-.28a.52.52 0 01.31-.07h.63c.15 0 .25.02.31.07.06.04.1.14.13.28l1.16 4.93 1.28-4.93c.03-.15.08-.24.13-.28.06-.05.15-.07.3-.07h.73c.14 0 .21.07.21.21 0 .04-.01.08-.02.13-.01.05-.03.12-.07.2l-1.78 5.74c-.04.15-.08.24-.14.28a.49.49 0 01-.3.07h-.68c-.15 0-.25-.03-.31-.08-.06-.05-.1-.14-.13-.29L17 9.2l-1.13 4.74c-.03.15-.07.24-.13.29a.52.52 0 01-.31.08h-.68a.45.45 0 01-.3-.08c-.06-.05-.1-.14-.14-.29l.06.42z" fill="#F59E0B" />
      <path d="M21.73 16.47c-2.64 1.95-6.47 2.99-9.77 2.99-4.62 0-8.78-1.71-11.93-4.55-.25-.22-.03-.53.27-.35 3.4 1.97 7.6 3.16 11.93 3.16 2.93 0 6.14-.6 9.1-1.86.44-.19.82.29.4.61z" fill="#F59E0B" />
    </svg>
  );
}

export function PandasIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="6" y="2" width="3.5" height="6" rx="0.5" fill="#150458" />
      <rect x="6" y="9.5" width="3.5" height="3" rx="0.5" fill="#E70488" />
      <rect x="6" y="14" width="3.5" height="6" rx="0.5" fill="#150458" />
      <rect x="14.5" y="4" width="3.5" height="6" rx="0.5" fill="#150458" />
      <rect x="14.5" y="11.5" width="3.5" height="3" rx="0.5" fill="#E70488" />
      <rect x="14.5" y="16" width="3.5" height="4" rx="0.5" fill="#150458" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
      <path d="M7 17.5c.3.5.8 1 1.6 1 .7 0 1.1-.3 1.1-.8 0-.6-.5-.8-1.2-1.1l-.4-.2c-1.2-.5-2-1.1-2-2.5 0-1.2.9-2.2 2.4-2.2.7 0 1.4.2 1.8.8l-1 .7c-.2-.4-.5-.5-.8-.5s-.6.2-.6.5c0 .4.2.5.9.8l.4.2c1.4.6 2.2 1.2 2.2 2.5 0 1.4-1.1 2.2-2.6 2.2-1.5 0-2.4-.7-2.9-1.6l1.1-.8z" fill="#000" />
      <path d="M14 17.3c.2.4.5.8 1.2.8.6 0 1-.2 1-.9v-5.4h1.3v5.4c0 1.4-.8 2.1-2.1 2.1-1.1 0-1.8-.6-2.1-1.3l.7-.7z" fill="#000" />
    </svg>
  );
}

export function CppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#00599C" />
      <path d="M8 15.5c-.8-.9-1.3-2.1-1.3-3.5 0-2.8 2.3-5 5.1-5 1.6 0 3 .7 3.9 1.8l-1.5 1.3c-.6-.7-1.4-1.1-2.4-1.1-1.7 0-3.1 1.3-3.1 3s1.4 3 3.1 3c1 0 1.8-.4 2.4-1.1l1.5 1.3c-.9 1.1-2.3 1.8-3.9 1.8-1.4 0-2.7-.5-3.5-1.3z" fill="white" />
      <path d="M16 10.5h1v-1h.8v1h1v.8h-1v1h-.8v-1h-1v-.8zm3.5 0h1v-1h.8v1h1v.8h-1v1h-.8v-1h-1v-.8z" fill="white" />
    </svg>
  );
}

export function JavaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9.4 18.8s-.9.5.6.7c1.8.2 2.8.2 4.8-.2 0 0 .5.3 1.3.6-4.5 1.9-10.2-.1-6.7-1.1zM8.8 16.3s-1 .8.5.9c2.1.2 3.5.2 6.2-.3 0 0 .4.4 1 .6-5.5 1.6-11.6.1-7.7-1.2z" fill="#E76F00" />
      <path d="M13.2 11.6c1.2 1.4-.3 2.6-.3 2.6s3.1-1.6 1.7-3.6c-1.3-1.9-2.4-2.8 3.2-6 0 0-8.7 2.2-4.6 7z" fill="#E76F00" />
      <path d="M18.8 20.2s.6.5-.7 1c-2.5.7-10.3.9-12.5 0-.8-.3.7-.8 1.2-.9.5-.1.8-.1.8-.1-.9-.6-5.8 1.3-2.5 1.8 9.1 1.5 16.5-.7 13.7-1.8zM9.8 13.7s-4.1 1-1.5 1.3c1.1.1 3.3.1 5.4-.1 1.7-.1 3.4-.4 3.4-.4s-.6.3-1 .5c-4 1.1-11.8.6-9.6-.5 1.9-.9 3.3-.8 3.3-.8z" fill="#E76F00" />
    </svg>
  );
}

export function SQLIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="#10B981" strokeWidth="1.5" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#10B981" strokeWidth="1.5" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="#10B981" strokeWidth="1.5" />
    </svg>
  );
}

export function NodeJSIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z" fill="none" stroke="#339933" strokeWidth="1.3" />
      <path d="M12 7v10M8 9l4 2.3L16 9M8 15l4-2.3L16 15" stroke="#339933" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function StreamlitIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 4l8 5-8 5-8-5 8-5z" fill="#FF4B4B" opacity="0.9" />
      <path d="M12 10l8 5-8 5-8-5 8-5z" fill="#FF4B4B" opacity="0.6" />
    </svg>
  );
}

export function TailwindIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.35 10.82 14.5 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.65 7.18 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.35 16.82 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.65 13.18 9.5 12 7 12z" fill="#06B6D4" />
    </svg>
  );
}

export function PlotlyIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="13" width="3" height="7" rx="0.5" fill="#3F4F75" />
      <rect x="8.5" y="9" width="3" height="11" rx="0.5" fill="#10B981" />
      <rect x="13" y="6" width="3" height="14" rx="0.5" fill="#3F4F75" />
      <rect x="17.5" y="4" width="3" height="16" rx="0.5" fill="#10B981" />
    </svg>
  );
}

export function ScipyIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#0054A6" strokeWidth="1.2" />
      <path d="M7 17c1-4 3-7 5-9s4-3 5-2c1 1 0 3-2 5s-5 5-9 5" fill="none" stroke="#0054A6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.5" fill="#0054A6" />
    </svg>
  );
}

export function VectorIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="2.5" fill="none" stroke="#10B981" strokeWidth="1.2" />
      <circle cx="18" cy="6" r="2.5" fill="none" stroke="#10B981" strokeWidth="1.2" />
      <circle cx="6" cy="18" r="2.5" fill="none" stroke="#10B981" strokeWidth="1.2" />
      <circle cx="18" cy="18" r="2.5" fill="none" stroke="#10B981" strokeWidth="1.2" />
      <line x1="8.5" y1="6" x2="15.5" y2="6" stroke="#10B981" strokeWidth="1" />
      <line x1="6" y1="8.5" x2="6" y2="15.5" stroke="#10B981" strokeWidth="1" />
      <line x1="18" y1="8.5" x2="18" y2="15.5" stroke="#10B981" strokeWidth="1" />
      <line x1="8.5" y1="18" x2="15.5" y2="18" stroke="#10B981" strokeWidth="1" />
      <line x1="8" y1="8" x2="16" y2="16" stroke="#10B981" strokeWidth="0.8" strokeDasharray="2 1" />
    </svg>
  );
}

export function PipelineIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="4" cy="12" r="2" fill="#10B981" />
      <circle cx="12" cy="12" r="2" fill="#10B981" />
      <circle cx="20" cy="12" r="2" fill="#10B981" />
      <path d="M6 12h4M14 12h4" stroke="#10B981" strokeWidth="1.5" />
      <path d="M9.5 10l2 2-2 2M17.5 10l2 2-2 2" stroke="#10B981" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function BrainIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3c-1.7 0-3 .8-3.8 2-.5-.2-1-.3-1.5-.3C4.5 4.7 3 6.2 3 8c0 .6.2 1.2.4 1.7C2.5 10.5 2 11.7 2 13c0 2 1.3 3.7 3.1 4.3.3 1.5 1.6 2.7 3.2 2.7.5 0 1-.1 1.4-.3.7.8 1.8 1.3 2.8 1.3h.5" stroke="#10B981" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M12 3c1.7 0 3 .8 3.8 2 .5-.2 1-.3 1.5-.3 2.2 0 3.7 1.5 3.7 3.3 0 .6-.2 1.2-.4 1.7.9.8 1.4 2 1.4 3.3 0 2-1.3 3.7-3.1 4.3-.3 1.5-1.6 2.7-3.2 2.7-.5 0-1-.1-1.4-.3-.7.8-1.8 1.3-2.8 1.3h-.5" stroke="#10B981" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <line x1="12" y1="3" x2="12" y2="21" stroke="#10B981" strokeWidth="0.8" strokeDasharray="2 2" />
    </svg>
  );
}

export function SupabaseIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13.5 21.87c-.47.57-1.4.17-1.4-.6V13.5H5.6c-.87 0-1.33-1.02-.74-1.66l7.14-8.2c.47-.57 1.4-.17 1.4.6V10.5h6.5c.87 0 1.33 1.02.74 1.66l-7.14 8.2z" fill="#3ECF8E" />
      <path d="M13.5 21.87c-.47.57-1.4.17-1.4-.6V13.5H5.6c-.87 0-1.33-1.02-.74-1.66l7.14-8.2" fill="#3ECF8E" opacity="0.5" />
    </svg>
  );
}

export function MongoDBIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2c-.6 2.2-1.8 3.8-3 5.2C7.5 9 7 10.8 7 12.5c0 3.6 2.4 6.5 5 8.5.1-1 .2-2.5.2-2.5s4.8-3 4.8-8c0-2.5-1.2-4.5-3-6.5-.5-.6-1.3-1.3-2-2z" fill="#47A248" />
      <path d="M12.2 21s.1-1 .1-2c0-1-.1-2-.1-2" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GitIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.36 11.26L12.74 1.64a1.22 1.22 0 00-1.72 0L9.16 3.5l2.17 2.17a1.45 1.45 0 011.84 1.84l2.09 2.09a1.45 1.45 0 11-.87.81l-1.95-1.95v5.13a1.45 1.45 0 11-1.19-.06V8.26a1.45 1.45 0 01-.79-1.9L8.33 4.22l-6.7 6.7a1.22 1.22 0 000 1.72l9.63 9.63a1.22 1.22 0 001.72 0l9.38-9.38a1.22 1.22 0 000-1.72z" fill="#F05032" />
    </svg>
  );
}

export function LinuxIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="8" rx="4" ry="5" fill="#F0C674" stroke="#333" strokeWidth="0.8" />
      <circle cx="10.5" cy="7" r="0.8" fill="#333" />
      <circle cx="13.5" cy="7" r="0.8" fill="#333" />
      <path d="M10.5 9.5c.5.5 2 .5 3 0" stroke="#333" strokeWidth="0.6" fill="none" strokeLinecap="round" />
      <path d="M8 13c-1.5 1-2.5 3-2 4.5.5 1.2 2 1.5 3.5 1.5M16 13c1.5 1 2.5 3 2 4.5-.5 1.2-2 1.5-3.5 1.5" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M9.5 19c.5.5 1.5 1 2.5 1s2-.5 2.5-1" stroke="#333" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

export function HTMLIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 2l1.5 17.3L12 22l6.5-2.7L20 2H4z" fill="#E44D26" />
      <path d="M12 4v16l5-2 1.2-14H12z" fill="#F16529" />
      <path d="M8 7h8l-.2 2H8.3l.2 2h7l-.5 5.5L12 18l-2.9-1.5-.2-2.5h2l.1 1.2 1 .6 1-.6.2-2H8l-.5-6z" fill="white" />
    </svg>
  );
}

export function CIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#A8B9CC" />
      <path d="M15.5 8.5c-1-.9-2.2-1.5-3.5-1.5-3 0-5 2.5-5 5s2 5 5 5c1.3 0 2.5-.5 3.5-1.5" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function FlaskIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M10 3h4M11 3v5.5l-5.5 9.5c-.6 1 .1 2.2 1.3 2.2h10.4c1.2 0 1.9-1.2 1.3-2.2L13 8.5V3" stroke="#94A3B8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15c1.5.8 3.2 1.2 4.5.6 1.3-.6 2.5-.2 3.5.4" stroke="#94A3B8" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function NextJSIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000" stroke="#666" strokeWidth="0.5" />
      <path d="M9 8v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 8l8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 8v5" stroke="url(#ng)" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="ng" x1="16" y1="8" x2="16" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function RESTfulAPIsIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="7" height="6" rx="1.5" stroke="#10B981" strokeWidth="1.2" fill="none" />
      <rect x="14" y="4" width="7" height="6" rx="1.5" stroke="#10B981" strokeWidth="1.2" fill="none" />
      <rect x="8.5" y="14" width="7" height="6" rx="1.5" stroke="#10B981" strokeWidth="1.2" fill="none" />
      <path d="M6.5 10v2c0 .5.4 1 1 1h5M17.5 10v2c0 .5-.4 1-1 1h-5" stroke="#10B981" strokeWidth="1" fill="none" />
      <circle cx="6.5" cy="7" r="0.8" fill="#10B981" />
      <circle cx="17.5" cy="7" r="0.8" fill="#10B981" />
      <circle cx="12" cy="17" r="0.8" fill="#10B981" />
    </svg>
  );
}

export function PyTorchIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5l-1.5 1.5 1.5 1.5" stroke="#EE4C2C" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4v3" stroke="#EE4C2C" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 7c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z" stroke="#EE4C2C" strokeWidth="1.5" fill="none" />
      <circle cx="15" cy="10" r="1" fill="#EE4C2C" />
      <path d="M12 10c-2.2 0-4 1.8-4 4s1.8 4 4 4" stroke="#EE4C2C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function ScikitLearnIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="8" r="2.5" fill="#F89939" opacity="0.8" />
      <circle cx="16" cy="8" r="2.5" fill="#3499CD" opacity="0.8" />
      <circle cx="12" cy="16" r="2.5" fill="#F89939" opacity="0.8" />
      <line x1="9.5" y1="9.5" x2="11" y2="14" stroke="#94A3B8" strokeWidth="0.8" />
      <line x1="14.5" y1="9.5" x2="13" y2="14" stroke="#94A3B8" strokeWidth="0.8" />
      <line x1="10" y1="8" x2="14" y2="8" stroke="#94A3B8" strokeWidth="0.8" />
    </svg>
  );
}

export function CrewAIIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="2.5" stroke="#FF6B35" strokeWidth="1.2" fill="none" />
      <circle cx="5" cy="17" r="2.5" stroke="#FF6B35" strokeWidth="1.2" fill="none" />
      <circle cx="19" cy="17" r="2.5" stroke="#FF6B35" strokeWidth="1.2" fill="none" />
      <line x1="10.5" y1="7" x2="6.5" y2="15" stroke="#FF6B35" strokeWidth="1" />
      <line x1="13.5" y1="7" x2="17.5" y2="15" stroke="#FF6B35" strokeWidth="1" />
      <line x1="7.5" y1="17" x2="16.5" y2="17" stroke="#FF6B35" strokeWidth="1" />
      <circle cx="12" cy="5" r="1" fill="#FF6B35" />
      <circle cx="5" cy="17" r="1" fill="#FF6B35" />
      <circle cx="19" cy="17" r="1" fill="#FF6B35" />
    </svg>
  );
}

export function GoogleADKIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5.5 7.5l6.5 11.3 6.5-11.3H5.5z" fill="none" stroke="#4285F4" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="12" cy="8" r="1.5" fill="#EA4335" />
      <circle cx="8.5" cy="14" r="1.5" fill="#FBBC05" />
      <circle cx="15.5" cy="14" r="1.5" fill="#34A853" />
      <path d="M12 9.5v2.5M10 13l-1 1M14 13l1 1" stroke="#4285F4" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function MySQLIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3c-4.4 0-8 1.3-8 3v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6c0-1.7-3.6-3-8-3z" fill="none" stroke="#00758F" strokeWidth="1.3" />
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="#00758F" strokeWidth="1.3" />
      <path d="M4 10c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#00758F" strokeWidth="1" fill="none" />
      <path d="M4 14c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#00758F" strokeWidth="1" fill="none" />
      <path d="M14 11.5v5" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16.5 11.5v5" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WebSocketsIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 8.5C5 6 7.5 4 12 4s7 2 7 4.5" stroke="#10B981" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M5 15.5c0 2.5 2.5 4.5 7 4.5s7-2 7-4.5" stroke="#10B981" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M5 8.5v3l3.5 1L5 15.5" stroke="#10B981" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 8.5v3l-3.5 1L19 15.5" stroke="#10B981" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="#10B981" />
    </svg>
  );
}

export function AzureIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6 4h5l-5 16h-2L6 4z" fill="#0089D6" />
      <path d="M10.5 7L20 20H8.5l3-4.5L10.5 7z" fill="#0089D6" opacity="0.8" />
      <path d="M14 4l-3.5 8L14 20h6L14 4z" fill="#0089D6" opacity="0.6" />
    </svg>
  );
}

// Map of tech name to icon component
export const techIconMap: Record<string, (props: { size?: number }) => React.JSX.Element> = {
  React: ReactIcon,
  Python: PythonIcon,
  TypeScript: TypeScriptIcon,
  Docker: DockerIcon,
  PostgreSQL: PostgresIcon,
  Redis: RedisIcon,
  FastAPI: FastAPIIcon,
  GitHub: GitHubIcon,
  AWS: AWSIcon,
  Pandas: PandasIcon,
  JavaScript: JavaScriptIcon,
  C: CIcon,
  "C++": CppIcon,
  Java: JavaIcon,
  SQL: SQLIcon,
  Flask: FlaskIcon,
  "Next.js": NextJSIcon,
  "Node.js": NodeJSIcon,
  Streamlit: StreamlitIcon,
  "Tailwind CSS": TailwindIcon,
  "RESTful APIs": RESTfulAPIsIcon,
  Plotly: PlotlyIcon,
  Scipy: ScipyIcon,
  PyTorch: PyTorchIcon,
  "Scikit-learn": ScikitLearnIcon,
  pgVector: VectorIcon,
  "ETL Pipelines": PipelineIcon,
  RAG: BrainIcon,
  CrewAI: CrewAIIcon,
  "Google ADK": GoogleADKIcon,
  Supabase: SupabaseIcon,
  MongoDB: MongoDBIcon,
  MySQL: MySQLIcon,
  Git: GitIcon,
  Linux: LinuxIcon,
  WebSockets: WebSocketsIcon,
  Azure: AzureIcon,
  "HTML/CSS": HTMLIcon,
};