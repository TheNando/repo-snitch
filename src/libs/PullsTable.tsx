import { useEffect } from "preact/hooks";
import { pat, repo } from "./utils";
import { useSignal } from "@preact/signals";

type Pull = {
  branch: string;
  id: number;
  state: string;
  title: string;
  userImg: string;
};

export const PullsTable = () => {
  const pulls = useSignal<Pull[]>([]);
  const repoUrl = `https://api.github.com/repos/${repo}/pulls`;
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${pat}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };

  useEffect(() => {
    fetch(repoUrl, { headers })
      .then((res) => res.json())
      .then(
        (res) =>
          (pulls.value = res.map((item: any) => ({
            branch: item.head.ref,
            id: item.number,
            state: item.state,
            title: item.title,
            userImg: item.user.avatar_url,
          })))
      );
  }, []);

  return (
    <div class="card bg-base-300 shadow-xl col-span-4">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>State</th>
              <th>Branch</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {pulls.value.map((items) => (
              <tr>
                <td>{items.id}</td>
                <td>
                  <div class="avatar">
                    <div class="w-8 rounded-full">
                      <img src={items.userImg} />
                    </div>
                  </div>
                </td>
                <td>{items.state}</td>
                <td>{items.branch}</td>
                <td>{items.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
