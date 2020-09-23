
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import "./App.css"


const App = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Meet {props.comic_data.name}</h1>
      <img src={props.comic_data.image} alt="Rick & Morty Character" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comic_data: state.comic_data,
  
  };
};

export default connect(mapStateToProps, { fetchData })(App);
