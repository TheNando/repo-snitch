import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";

import { UserIcon } from "../assets/UserIcon";
import { pat } from "./utils";

type GitHubUser = {
  userImg: string;
  username: string;
  name: string;
};

const Avatar = () => {
  const user = useSignal<GitHubUser>({} as GitHubUser);

  const userUrl = "https://api.github.com/user";
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${pat}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };

  useEffect(() => {
    fetch(userUrl, { headers })
      .then((res) => res.json())
      .then(
        (res) =>
          (user.value = {
            userImg: res.avatar_url,
            username: res.login,
            name: res.name,
          })
      );
  }, []);

  const [hide, setHide] = useState(false);

  const isOpen = !hide && !pat.value ? "tooltip-open" : "";

  const showModal = () => {
    setHide(true);
    const modal = document.getElementById("config_modal") as HTMLDialogElement;
    modal.showModal();
  };

  return (
    <div
      class={`tooltip tooltip-info tooltip-left ${isOpen}`}
      data-tip={user.value.name ?? "Click here to add config"}
    >
      <button
        class="btn btn-ghost btn-circle avatar mt-1"
        onClick={showModal}
        role="button"
        tabindex={0}
      >
        <div class="w-10 rounded-full">
          {user.value.name ? <img src={user.value.userImg} /> : <UserIcon />}
        </div>
      </button>
    </div>
  );
};

export const Nav = () => {
  return (
    <div class="navbar bg-neutral text-neutral-content px-4">
      <div class="flex-1 text-xl">Repo Snitch</div>

      <div class="flex-none">
        <Avatar />
      </div>
    </div>
  );
};
