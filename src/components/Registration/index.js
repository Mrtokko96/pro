//Dependencies
import React, { Component } from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import "./styles.css";
import { userInfo } from "../Data/db_model.js";
var userFile = require("./reg.json");
const fs = require('fs');
var fileContent = "hello";


function doRegister() {
  fs.writeFile("message.txt", "Hello Node.js", err => {
    console.log("The file has been saved!");
  });
}

class Registration extends Component {
  render() {
    return (
      <div className="Registration">
        <section className="singUp">
          <h4>Sign up</h4>
          <form>
            <input type="text" placeholder="Username" className="username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repeat Password" />
            <input type="email" placeholder="Email" />
            <button type="button" onClick={doRegister}>
              Sign up
            </button>
            <h3> {userInfo} </h3>
          </form>
        </section>
        <section className="login">
          <h4>Login</h4>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="button">Login</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Registration;
