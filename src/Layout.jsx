import { Layout } from "antd";
import React, { useEffect } from "react";
import Router from "./Router";
import { useLocation } from "react-router-dom";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto", // Use 'auto' for instant scrolling
      });
    }, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <Layout>
        <Router />
      </Layout>
    </React.Fragment>
  );
};

export default AppLayout;
