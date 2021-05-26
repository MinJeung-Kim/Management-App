import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          {/* 경로가 정확히 '/'일때는 로그인 화면으로 이동 */}
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
