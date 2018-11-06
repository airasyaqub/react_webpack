/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from "react";
import "./app.scss";
import image from "../public/images/img.png";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="airas">Airas hello</div>
        <img alt="yo" src={image} />
      </Fragment>
    );
  }
}

export default App;
/*
{
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "prettier/react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ],
        "react/jsx-filename-extension": 0,
        "react/prefer-stateless-function": 0,
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true
            }
        ]
    },
    "plugins": [
        "jsx-a11y",
        "prettier"
    ]
}
*/
