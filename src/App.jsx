import { Suspense } from "react";
import FallBack from "./Components/Fallback";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layout";
import { isAuthenticated } from "./common-utils";
import Login from "./Pages/Login";

function App() {
  const isAuth = isAuthenticated();
  return (
    <Suspense fallback={<FallBack />}>
      <BrowserRouter>
        <Routes>
          {
            isAuth ?
            <Route path="/*" element={<AppLayout />} /> :
            <Route path="/*" element={<Login />} />
          }
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
