import { render } from 'https://unpkg.com/preact@latest?module';
import { ConfigModal } from '/modules/config-modal.js';
import { PullsTable } from '/modules/pulls-table.js';
import { Repo } from '/modules/repo.js';
import { Nav } from '/modules/nav.js';
import { html } from '/modules/utils.js';

const App = () => {
    return html`
        <${Nav} />

        <div class="container mx-auto">
            <div class="grid grid-cols-4 gap-4 mt-10">
                <${Repo} />                
                <${PullsTable} />
            </div>
            <${ConfigModal} />
        </div>
    `;
};

render(html`<${App} />`, document.body);
