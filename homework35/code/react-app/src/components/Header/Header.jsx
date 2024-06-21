import React from "react";
import "./Header.css";

export class Header extends React.Component {
  render() {
    return (
      <header className="header container py-4 px-3 mx-auto primary bg-info-subtle border border-primary-subtle rounded-3" >
        <div className="d-flex justify-content-center primary">
          <p className="d-flex text-primary align-items-center">ReactApp</p>
        </div>
        <ul className="d-flex align-items-center">
          <li><a className="text-primary" href='/'>Home</a></li>
          <li><button className="btn btn-primary">Click me</button></li>
        </ul>
      </header>
    );
  }
}
