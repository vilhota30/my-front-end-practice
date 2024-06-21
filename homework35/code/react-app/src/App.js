import React from "react";
import { Header } from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx"
import "./App.css";
import "./custom.scss";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

     return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;