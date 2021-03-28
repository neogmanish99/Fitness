import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
// Pages & Components
import FirstPage from "./pages/FirstPage";
import SecondPage from './pages/SecondPage'
import GymPage from "./pages/GymPage";
import HomePage from "./pages/HomePage";
import LossGainPage from "./pages/LossGainPage";
import TipsPage from "./pages/TipsPage";
import WorkoutPage from './pages/WorkoutPage'


const App = () => {
  return (
    <Switch>
      <Route path="/" component={FirstPage} exact />
      <Route path="/loss" component={LossGainPage} />
      <Route path="/gym" component={GymPage} />
      <Route path ="/second" component={SecondPage}/>
      <Route path ="/workout" component={WorkoutPage}/>

      <Route path="/home" component={HomePage} />
      <Route path="/tips" component={TipsPage} />
    </Switch>
  );
};

export default App;
