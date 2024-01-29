import Movie from './Movie';

// the component function
const Movies = (props) => {
  //The Components Returned JSX
  return <div className="movies"> 
  {props.movies.map((movie) => {
  return <Movie key={movie.name} movie={movie} />
  })}
  </div>;
};

// export the component
export default Movies;
