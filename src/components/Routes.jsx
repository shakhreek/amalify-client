import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Leads from "../pages/Leads";
import Contracts from "../pages/Contracts";
import Products from "../pages/Products";
import Purchases from "../pages/Purchases";
import Sellers from "../pages/Sellers";
import Conversions from "../pages/Conversions";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/leads" component={Leads} />
      <Route path="/contracts" component={Contracts} />
      <Route path="/products" component={Products} />
      <Route path="/purchases" component={Purchases} />
      <Route path="/managers" component={Sellers} />
      <Route path="/conversions" component={Conversions} />
    </Switch>
  );
};

export default Routes;
