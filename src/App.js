import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';

function App() {
  const movies = [
    {
      name: "Scott Pilgrim Vs The World",
      year: "2010",
      rating: "PG-13",
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8045259_p_v12_an.jpg"

    },
    {
      name: "The Dark Knight",
      year: "2008",
      rating: "R",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"

    },
    {
      name: "Wonka",
      year: "2023",
      rating: "PG",
      image: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1699288064/amc-cdn/production/2/movies/65900/65858/PosterDynamic/160145.jpg"

    },
    {
      name: "Avatar: The Way of Water",
      year: "2022",
      rating: "PG-13",
      image: "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"

    },
    {
      name: "Ferris Bueller's Day Off",
      year: "1986",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/M/MV5BMDA0NjZhZWUtNmI2NC00MmFjLTgwZDYtYzVjZmNhMDVmOTBkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"

    },
  ]
  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
