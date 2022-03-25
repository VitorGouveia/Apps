import { HashRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("@pages/Home"));

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<h1>loading homepage...</h1>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </HashRouter>
  );
};
