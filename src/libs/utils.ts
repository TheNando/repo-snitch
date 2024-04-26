import { signal } from "@preact/signals";

export const pat = signal(window.localStorage.getItem("gh_pat") ?? "");

export const updatePat = (pat: string) =>
  window.localStorage.setItem("gh_pat", pat);

export const repo = signal(window.localStorage.getItem("gh_repo") ?? "");

export const updateRepo = (repo: string) =>
  window.localStorage.setItem("gh_repo", repo);
