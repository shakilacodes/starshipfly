import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { API_URL, SEARCH_URL } from "./components/swapi";
import { Container } from "react-bootstrap";
import { Dimmer, Loader } from "semantic-ui-react";
import ShipDetail from "./components/Ship-Detail";
import StarshipList from "./components/Starship-List";
import Home from "./components/Home";
import StarNav from "./components/Star-Nav";
import Film from "./components/Film";

function App() {
  const [starships, setStarships] = useState([]);
  const [ship, setShip] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStarships() {
      let res = await fetch(API_URL);
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }

    async function getShip(name) {
      let shipRes = await fetch(SEARCH_URL + name);
      let shipData = await shipRes.json();
      setShip(shipData.results);
      setLoading(false);
    }

    getStarships();
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/React">
        <StarNav />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading...</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/starship-list">
                <StarshipList data={starships} />
              </Route>
              <Route
                exact
                path="/ship-detail/:shipName"
                render={props => <ShipDetail {...props} />}
              ></Route>
              <Route path="/film" component={Film}></Route>
            </Switch>
          )}
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
