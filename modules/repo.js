import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import { html } from '/modules/utils.js';

export const Repo = () => {
    const repoStr = window.localStorage.getItem('gh_repo');
    const [repo, setRepo] = useState(repoStr);

    const updateRepo = (event) => {
        const newRepo = event.target.value;
        setRepo(newRepo);
        window.localStorage.setItem('gh_repo', newRepo);
    };

    return html`
        <div>
            <input
                class="input input-bordered w-full"
                placeholder="{owner}/{repo}"
                type="text"
                onInput=${updateRepo}
                value=${repo}
            />
        </div>
    `;
};