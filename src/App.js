import React from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route, withRouter } from "react-router-dom";
import loadable from "@loadable/component";
import ErrorBoundary from "./utils/ErrorBoundary";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const LandingPage = loadable(() =>
  import("./pages/LandingPage/LandingPage" /* webpackChunkName: "t-0" */)
);

function App() {
  return (
    <ErrorBoundary>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}

export default withRouter(App);
