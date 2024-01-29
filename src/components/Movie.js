import "./movie.css";
// the component function
const Movie = (props) => {
  //The Components Returned JSX
  return (
    <div className="movie">
      <div>
        <h1>{props.movie.name}</h1>
      </div>
      <div>
        <h2>{props.movie.year}</h2>
      </div>
      <div>
        <h3>{props.movie.rating}</h3>
      </div>
      <div>
        <img src={props.movie.image} />
      </div>
    </div>
  );
};

// export the component
export default Movie;
