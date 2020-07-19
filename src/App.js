import React from "react";
import { Watch } from "./containers/Watch/Watch";
import { Home } from "./containers/Home/Home";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    // AppLayout just renders the top search bar
    // and in this case when we switch we can choose and select different components
    // using the switch component
    return (
      <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/" component={Home} />
        </Switch>
      </AppLayout>
    );
  }
}

export default App;

