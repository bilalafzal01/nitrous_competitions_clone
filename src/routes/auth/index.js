/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import { Spin } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
import Home from "./home";
import About from "./about";

const FrontendRoutes = () => {
  return (
    <AuthLayout>
      <Switch>
        <Suspense
          fallback={
            <div className="spin">
              <Spin />
            </div>
          }
        >
          {/* routes here */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Suspense>
      </Switch>
    </AuthLayout>
  );
};

export default FrontendRoutes;
