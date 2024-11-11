import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FallBack from "../Components/Fallback";
import Home from "../Pages/Home";
const SaleOrder = lazy(()=> import("../Pages/SaleOrder"));

const Router = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<SaleOrder />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
