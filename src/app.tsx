import { ConfigModal } from "./libs/ConfigModal";
import { Nav } from "./libs/Nav";
import { PullsTable } from "./libs/PullsTable";
import { Repo } from "./libs/Repo";
import { TableTabs } from "./libs/TableTabs";

export const App = () => {
  return (
    <>
      <Nav />

      <div class="container mx-auto">
        <div class="grid grid-cols-4 gap-4 mt-10">
          <Repo />
          <TableTabs />
          <PullsTable />
        </div>
        <ConfigModal />
      </div>
    </>
  );
};
