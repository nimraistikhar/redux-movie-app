import React from 'react';
import {BrowserRouter as Routes, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Header></Header>
          <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movie/:imdbID" component={MovieDetail} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
        <Footer />
      </Routes>
    </div>
  );
}

export default App;
