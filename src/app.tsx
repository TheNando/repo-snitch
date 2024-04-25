import { ConfigModal } from './libs/ConfigModal';
import { Nav } from './libs/Nav';
import { PullsTable } from './libs/PullsTable';
import { Repo } from './libs/Repo';

export function App() {
  return (<>
    <Nav />

    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-4 mt-10">
        <Repo />
        <PullsTable />
      </div>
      <ConfigModal />
    </div>
  </>
  );
}
