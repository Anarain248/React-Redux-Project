import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";

//  import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Questions from './components/Questions';
import Answers from "./components/Answers";
import {getQuestions} from './store/questions';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(getQuestions());
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/question/:id'>
            <div>
              <h2>What is the best way to weight train?</h2>
              <h1>There is no best way to weight train, everybody is different and over time with varying rep ranges you will find your favorite. A quick guid would be strength with 1-5 reps, hypertrophy with 8-12 reps, and endurance with 15-25 reps.</h1>
            </div>
          </Route>
          <Route path='/question/:id'>
            <div>
              <h1>That will depend on your body type(whether you are a ectomorph, mesomorph, or endomorph) along with your body weight and daily activity</h1>
            </div>

          </Route>

           {/* <Route path="/login" >
            <LoginFormPage />
          </Route > */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/">
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
