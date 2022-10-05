import React from "react";
import { directors } from "../data";

// const Mydirectors = directors.map((director) => {
//   console.log(director.name);
// });
function Directors() {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.name}>
          <h1>{director.name}</h1>
          <ul>{director.movies.map((movie)=>(
            <li key={movie}>{movie}</li>
          ))}</ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
