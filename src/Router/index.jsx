import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FallBack from "../Components/Fallback";
import Home from "../Pages/Home";
const SaleOrder = lazy(()=> import("../Pages/SaleOrder"));
const App = lazy(()=> import("../Components/EditSalesOrderModal/test"));

const Router = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<SaleOrder />} />
        <Route path="/test" element={<App />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/productDetails" element={<ProductDetailsPage />} />
        <Route path="/view-details" element={<ViewDetails />} /> */}
      </Routes>
    </Suspense>
  );
};

export default Router;
