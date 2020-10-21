import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import PostDetails from './Component/Post/PostDetails/PostDetails';
import Header from './Component/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
