import React from "react";
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { store } from "./store";
import Layout from "./components/Layout/Layout";
import Groups from "./components/Groups";
import GroupDetail from "./components/GroupDetail";

const App = () => {
  const routes = (
    <Switch>
      <Route path="/groups/:groupId" component={GroupDetail} />
      <Route path="/" exact component={Groups} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          {routes}
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;


