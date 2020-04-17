import ReactDOM from "react-dom";
import React from "react";
import { Router } from "@reach/router";
import { AuthContext } from "./AuthContext";

import Landing from "./Landing";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";
import useLogin from "./hooks/useLogin";

const App = () => {
  const value = useLogin();
  console.log(value.user);
  return (
    <div>
      <AuthContext.Provider value={value}>
        <Layout>
          <Router>
            <Landing path="/" />
            <Home path="/home" />
          </Router>
        </Layout>
      </AuthContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
