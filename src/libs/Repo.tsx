import { useState } from "preact/hooks";

export const Repo = () => {
  const repoStr = window.localStorage.getItem("gh_repo") ?? "";
  const [repo, setRepo] = useState(repoStr);

  return (
    <div>
      <input
        class="input input-bordered w-full"
        placeholder="{owner}/{repo}"
        type="text"
        onInput={(event) => {
          const target = event.target as HTMLInputElement;
          const newRepo = target.value;
          setRepo(newRepo);
          window.localStorage.setItem("gh_repo", newRepo);
        }}
        value={repo}
      />
    </div>
  );
};
