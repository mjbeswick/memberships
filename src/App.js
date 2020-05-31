import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Memberships from './routes/memberships/Memberships';
import Home from './routes/home/Home';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/membership">
            <Memberships />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
