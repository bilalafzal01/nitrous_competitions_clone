/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import "./assets/css/style.css";
import GlobalStyle from "./globalStyles";

import Auth from "./routes/auth";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <GlobalStyle />
      <Switch>
        <Route>
          {/* route and protected route logic here */}
          <Route path="/" component={Auth} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
