import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";

//  import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Questions from './components/Questions';
import Answers from "./components/Answers";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    <h1>Fitness OverFlow</h1>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

           {/* <Route path="/login" >
            <LoginFormPage />
          </Route > */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/answers">
            <Answers />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
