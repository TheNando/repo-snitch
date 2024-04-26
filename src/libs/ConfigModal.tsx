import { pat, updateSignal } from "./utils";

export const ConfigModal = () => (
  <dialog id="config_modal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Personal Access Token</h3>

      <p class="py-4">
        Add a GitHub personal access token that has pull request read privileges
        for the repo you'd like to access.
      </p>

      <label class="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path d="M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0Zm-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5ZM11 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
        </svg>
        <input
          class="grow"
          onBlur={updateSignal(pat)}
          placeholder="personal access token"
          type="text"
          value={pat}
        />
      </label>

      <div class="modal-action">
        <form method="dialog">
          <button class="btn" onClick={() => window.location.reload()}>
            Close
          </button>
        </form>
      </div>
    </div>
  </dialog>
);
