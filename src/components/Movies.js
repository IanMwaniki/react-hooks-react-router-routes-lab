import React from "react";
import { movies} from "../data";
// console.log(movies)
function Movies() {
  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {
    movies.map((movie)=>(
      <div key={movie.title}>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p> 
        <ul>{movie.genres.map((genre)=>(<li key={genre}>{genre}</li>))}</ul>
      </div>
      
    ))
  }
  </div>;
}

export default Movies;
