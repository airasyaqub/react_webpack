import React, { Component, Fragment } from 'react';
import './app.scss';
import image from '../public/images/img.png';

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

----------------------------->

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
        "no-unused-vars": "warn",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "import/imports-first": [
            "error",
            "absolute-first"
        ],
        "import/newline-after-import": "error"
    },
    "globals": {
        "window": true,
        "document": true,
        "localStorage": true,
        "FormData": true,
        "FileReader": true,
        "Blob": true,
        "navigator": true
    }
}


------------------------------>
{
    "extends": [
        "airbnb-base",
        "prettier",
        "prettier/react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ],
        "no-unused-vars": "warn",
        "no-console": "off",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "import/imports-first": [
            "error",
            "absolute-first"
        ],
        "import/newline-after-import": "error",
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 120,
                "semi": true
            }
        ]
    },
    "globals": {
        "window": true,
        "document": true,
        "localStorage": true,
        "FormData": true,
        "FileReader": true,
        "Blob": true,
        "navigator": true
    },
    "plugins": [
        "prettier"
    ]
}

*/
