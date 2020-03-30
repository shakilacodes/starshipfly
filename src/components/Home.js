import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron">
        <br></br>
        <h1 className="display-3">A Starship</h1>
        <p className="lead">
          also known as a starcraft or interstellar spacecraft, is a spacecraft
          designed for traveling between planetary systems. Theoretically.
        </p>
        <footer className="blockquote-footer">
          {" "}
          Erik Sofge,{" "}
          <a className="breadcrumb-item" href="#">
            Wikipedia
          </a>
        </footer>
        <hr class="my-4"></hr>
        <p> Via the Star Wars API</p>
        <p class="lead">
          <Link to="/starship-list">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </Link>
        </p>
      </div>
    );
  }
}

export default Home;
