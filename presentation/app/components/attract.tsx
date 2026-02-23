"use client";

import React, { useEffect, useRef, useState } from "react";

type AttractModeProps = {
  idleMs?: number;
  videoSrc?: string;
  enabled?: boolean;
};

const DEFAULT_EVENTS = [
  "pointerdown",
  "pointermove",
  "keydown",
  "touchstart",
  "wheel",
  "mousemove",
] as const;

export function AttractMode({
  idleMs = 5000,
  videoSrc = "/loop.mp4",
  enabled = true,
}: AttractModeProps) {
  const [idle, setIdle] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const armTimer = () => {
    clearTimer();
    timerRef.current = window.setTimeout(() => setIdle(true), idleMs);
  };

  const reset = () => {
    if (idle) setIdle(false);
    armTimer();
  };

  useEffect(() => {
    if (!enabled) return;

    const handler = () => reset();

    DEFAULT_EVENTS.forEach((e) =>
      window.addEventListener(e, handler, { passive: true })
    );

    const onVisibility = () => {
      if (!document.hidden) reset();
    };

    document.addEventListener("visibilitychange", onVisibility);
    armTimer();

    return () => {
      clearTimer();
      DEFAULT_EVENTS.forEach((e) =>
        window.removeEventListener(e, handler as any)
      );
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [enabled, idleMs, idle]);

  if (!enabled || !idle) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      onPointerDown={reset}
      onKeyDown={reset}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "black",
        cursor: "pointer",
      }}
    >
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 24,
          bottom: 24,
          padding: "10px 14px",
          borderRadius: 12,
          background: "rgba(0,0,0,0.35)",
          color: "white",
          fontSize: 16,
          backdropFilter: "blur(6px)",
        }}
      >
        Tap to start demo
      </div>
    </div>
  );
}