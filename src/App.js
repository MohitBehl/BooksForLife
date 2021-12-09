import React, { useState } from "react";
import "./styles.css";

const dataBase = {
  js: {
    "Eloquent JavaScript": "4/5",
    "You Don't Know JS": "3.5/5"
  },
  selfHelp: {
    "The 5 Am Club": "4/5",
    "Code of Extraordinary Mind": "4.5/5"
  },
  algo: {
    "Cormen-DS": "5/5",
    "Algorithm Design": "4.5/5"
  }
};

var books = ["Eloquent JavaScript", "You Don't Know JS"];

export default function App() {
  const [bookType, setBookType] = useState("js");
  function onClickHandler(event) {
    var newBookType = event.target.value;
    setBookType(newBookType);

    books = Object.keys(dataBase[newBookType]);
    books.map((book) => {
      return console.log(book);
    });
  }
  return (
    <div className="App container container-centre">
      <div className="mainBox"></div>
      <h1 className="mainHeading">booksForLife</h1>
      <p className="textUnderHeading">Find Best Books Here</p>
      <div className="buttons">
        <button onClick={onClickHandler} value="js">
          JavaScript
        </button>
        <button onClick={onClickHandler} value="selfHelp">
          Motivational
        </button>
        <button onClick={onClickHandler} value="algo">
          Algorithms
        </button>
      </div>
      <hr />
      <ul style={{ listStyleType: "none" }}>
        {books.map((book) => {
          return (
            <li
              style={{
                textAlign: "left",
                border: "1px solid black",
                marginBottom: "0.5rem",
                borderRadius: "1rem"
              }}
            >
              <div style={{ padding: "1rem" }}>{book}</div>
              <div style={{ padding: "1rem" }}>{dataBase[bookType][book]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
