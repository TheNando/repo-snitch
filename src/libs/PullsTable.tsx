import { useEffect } from "preact/hooks";

export const PullsTable = () => {
  const pat = window.localStorage.getItem("gh_pat");
  const repo = window.localStorage.getItem("gh_repo");
  const repoUrl = `https://api.github.com/repos/${repo}/pulls`;
  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${pat}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };

  useEffect(() => {
    fetch(repoUrl, { headers })
      .then((res) => res.json())
      .then((res) => console.log({ res }));
  }, []);

  return (
    <div class="card bg-base-300 shadow-xl col-span-3">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
