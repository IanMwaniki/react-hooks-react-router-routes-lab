import React from "react";
import { actors } from "../data";

function Actors() {
  const myActors = actors.map((actor) => (
    <div key={actor.name}>
      <h1>{actor.name}</h1>
      <ul>{actor.movies.map((movie)=>(
        <li key={movie}>{movie}</li>
      ))}</ul>
    </div>
  ));
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {myActors}
    </div>
  );
}

export default Actors;
