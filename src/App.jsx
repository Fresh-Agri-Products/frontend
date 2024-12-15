import { Suspense } from "react";
import FallBack from "./Components/Fallback";
import { HashRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layout";
import { isAuthenticated } from "./common-utils";
import Login from "./Pages/Login";

function App() {
  const isAuth = isAuthenticated();
  return (
    <Suspense fallback={<FallBack />}>
      <HashRouter>
        <Routes>
          {
            isAuth ?
            <Route path="/*" element={<AppLayout />} /> :
            <Route path="/*" element={<Login />} />
          }
        </Routes>
      </HashRouter>
    </Suspense>
  );
}

export default App;
