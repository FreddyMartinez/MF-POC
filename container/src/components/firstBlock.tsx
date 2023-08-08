import { Suspense, lazy, useContext } from "react";
import { routesContext } from "../routes";

const MF = lazy(() => import("mf1/App"));

export function FirstBlock() {
  const updateRoutes = useContext(routesContext)

  return (
    <div>First block
      <Suspense fallback={'...'}>
        <MF routerUpdater={updateRoutes} />
      </Suspense>
    </div>
  );
}
