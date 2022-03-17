import './App.css';
import {useState, useEffect} from 'react'

//'http://www.omdbapi.com/?apikey=29da9a6&s=star wars

function Movies({movies, sok}){
return (
  <>
  <h2>{sok}</h2>
  <section className="grid">
   {movies?.map((movie) =>(
     <Movie key={movie.imdbID} title={movie.Title} img={movie.Poster} />
   ))}
  </section>
  </>
)
}
function Movie({title, img, sok}){
  
return (
    <article>
      <h3>{title}</h3>
      <img src={img} alt={title}/>
    </article>
)
}

function App() {
  const [search, setSearch] = useState('star wars')
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=29da9a6&s=${search}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  console.log(movies)
  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=29da9a6&s=star wars')
    .then((response) => response.json())
    .then((data) => setMovies(data.Search.splice(0,5)))
    .catch((err) => console.log(err))
  }, [])

  const handleSearch = (event) =>{
    setSearch(event.target.value)
  }

  return (
    <>
    <header>
    <h1>Hei</h1>
    <label htmlFor="search">Søk etter film</label>
    <input type="text" id="search" onChange={handleSearch}></input>
    <button type="button" onClick={getMovies}>Søk</button>
    </header>
    <main>
    <Movies movies={movies} sok={`Du søkte etter: ${search}`}/>
    </main>
    </>
  );
}

export default App;
