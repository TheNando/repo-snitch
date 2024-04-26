import type { JSX } from "preact/jsx-runtime";
import { Signal, effect, signal } from "@preact/signals";

export const updateSignal =
  (signal: Signal) => (event: JSX.TargetedEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    signal.value = target.value;
  };

export const pat = signal(window.localStorage.getItem("gh_pat") ?? "");

effect(() => window.localStorage.setItem("gh_pat", pat.value));

export const repo = signal(window.localStorage.getItem("gh_repo") ?? "");

effect(() => window.localStorage.setItem("gh_repo", repo.value));
