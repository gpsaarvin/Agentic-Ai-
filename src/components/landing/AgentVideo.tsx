"use client";

import { Pause, Play, Radio } from "lucide-react";
import { useRef, useState } from "react";

const VIDEO_SOURCE =
  "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4";

export default function AgentVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative mx-auto aspect-video w-full max-w-[860px] overflow-hidden rounded-3xl border border-border-active bg-surface-raised shadow-[0_0_80px_rgba(0,212,255,0.08)]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Live autonomous agent operations feed"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={VIDEO_SOURCE} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,0.78),rgba(5,5,7,0.12)_58%,rgba(5,5,7,0.62)),linear-gradient(0deg,rgba(5,5,7,0.7),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,212,255,0.18),transparent_34%)]" />

      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur-md">
        <Radio className="h-3.5 w-3.5 text-accent" />
        <span className="text-[10px] font-mono tracking-[0.16em] text-foreground">
          LIVE AGENT FEED
        </span>
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
      </div>

      <div className="absolute bottom-5 left-5 max-w-xs">
        <p className="mb-2 text-[10px] font-mono tracking-[0.18em] text-accent">
          AUTONOMOUS RUNTIME / 04
        </p>
        <p className="text-sm leading-relaxed text-white/75">
          Watch your agents reason, coordinate, and execute in real time.
        </p>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-accent/60 hover:text-accent"
        aria-label={isPlaying ? "Pause live feed" : "Play live feed"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="ml-0.5 h-4 w-4" />
        )}
      </button>
    </div>
  );
}
