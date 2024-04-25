import { useState } from 'preact/hooks';

const Avatar = () => {
  const [hide, setHide] = useState(false);
  const pat = window.localStorage.getItem('gh_pat');

  const isOpen = !hide && !pat ? 'tooltip-open' : '';

  const showModal = () => {
    setHide(true);
    const modal = document.getElementById('config_modal') as HTMLDialogElement;
    modal.showModal();
  };

  const avatarButton = (
    <button
      class="btn btn-ghost btn-circle avatar mt-1"
      onClick={showModal}
      role="button"
      tabindex={0}
    >
      <div class="w-10 rounded-full">
        <svg class="opacity-70 w-10 h-10" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M 16 0 C 24.837 0 32 7.163 32 16 C 32 24.748 24.979 31.856 16.265 31.998 L 16 32 C 7.163 32 0 24.836 0 16 C 0 7.163 7.163 0 16 0 Z M 21.299 16.314 C 19.91 17.702 17.991 18.56 15.872 18.56 C 13.806 18.56 11.93 17.744 10.55 16.416 C 8.068 18.131 6.433 20.985 6.4 24.222 L 6.4 24.32 L 6.4 26.733 C 8.948 29.013 12.312 30.4 16 30.4 C 19.688 30.4 23.053 29.013 25.6 26.733 L 25.6 24.32 C 25.6 20.977 23.891 18.033 21.299 16.314 Z M 15.872 4.48 C 12.337 4.48 9.472 7.345 9.472 10.88 C 9.472 14.415 12.337 17.28 15.872 17.28 C 19.407 17.28 22.272 14.415 22.272 10.88 C 22.272 7.345 19.407 4.48 15.872 4.48 Z" />
        </svg>
      </div>
    </button>
  );

  return pat ? avatarButton : (
    <div class={`tooltip tooltip-info tooltip-left ${isOpen}`} data-tip="Click here to add config">
      {avatarButton}
    </div>
  );
};

export const Nav = () => {
  return (
    <div class="navbar bg-neutral text-neutral-content px-4">
      <div class="flex-1 text-xl">
        Repo Snitch
      </div>

      <div class="flex-none">
        <Avatar />
      </div>
    </div>
  );
};