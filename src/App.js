import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import "./App.css";
import Interface from "./components/Interface";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=2.2&lon=2.2&appid=09bd509dc3f293584e3d0a44061be1ce&units=metric`
    );
    this.setState({ weather: data });
  }

  render() {
    console.log(this.state);

    return (
      <>
        <Header />
        <Interface />
        <Footer />
      </>
    );
  }
}

export default App;
