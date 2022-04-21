import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {actors.map((a, i) => {
      return (
        <div key={i}>
        <h2>Name: {a.name}</h2>
        <p>Movies:</p>
        <ul>
          {a.movies.map((m, i) => {
            return (<li key={i}>{m}</li>)
          })}
        </ul>
        </div>
      )
    })}
    </div>
  );
}

export default Actors;
