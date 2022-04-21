import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {directors.map((d, i) => {
      return (
        <div key={i}>
          <h2>Name: {d.name}</h2>
          <p>Movies:</p>
          <ul>
          {d.movies.map((m, i) => {
            return <li key={i}>{m}</li>
          })}
          </ul>
        </div>
      )
    })}
  </div>
  );
}

export default Directors;
