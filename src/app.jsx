import React, { useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Billing from "./components/billing/billing";
import Dashboard from "./components/dashboard/dashboard";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import SideBar from "./components/side_bar/side_bar";

function App({ FileInput, authService, cardRepository }) {
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  return (
    <div className={styles.backgroud}>
      <div className={styles.app}>
        <BrowserRouter>
          <Switch>
            <Route path="/:id" children={<SideBar />} />
          </Switch>
          <Switch>
            <Route exact path="/">
              <Login authService={authService} />
            </Route>
            <Route exact path="/maker">
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
                onLogout={onLogout}
              />
            </Route>
            <Route path="/dashboard">
              <Dashboard onLogout={onLogout} />
            </Route>
            <Route path="/billing">
              <Billing />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
