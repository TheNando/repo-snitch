import { repo, updateSignal } from "./utils";

export const Repo = () => (
  <div class="col-span-1">
    <input
      class="input input-bordered w-full"
      placeholder="{owner}/{repo}"
      type="text"
      onInput={updateSignal(repo)}
      value={repo}
    />
  </div>
);
