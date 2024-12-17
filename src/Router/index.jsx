import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FallBack from "../Components/Fallback";
import Home from "../Pages/Home";
const SaleOrder = lazy(()=> import("../Pages/SaleOrder"));
const Contact = lazy(()=> import("../Pages/Contact"));

const Router = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<SaleOrder />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
