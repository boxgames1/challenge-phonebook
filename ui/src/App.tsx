import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/shared/Header";
import RouteApp from "./route/RouteApp";
import { PhoneBookContextProvider } from "./state/Context";
import Layout from "./components/Layout";

import "./App.css";

const App = () => {
  return (
    <PhoneBookContextProvider>
      <Router>
        <Header />
        <Layout>
          <RouteApp />
        </Layout>
      </Router>
    </PhoneBookContextProvider>
  );
};

export default App;
