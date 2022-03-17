
import {useState, useEffect} from 'react'
import Movies from './Movies'

export default function Main(){
const [search, setSearch] = useState('star wars')
const [movies, setMovies] = useState([])
const [result, setResult] = useState(false)

const getMovies = async () => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=29da9a6&s=${search}`)
  const data = await response.json()
  setMovies(data.Search)
  setResult(true)
}

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
      <h1>Filmregister</h1>
      <form>
        <label htmlFor="search">Søk etter film</label>
        <input type="text" id="search" onChange={handleSearch}></input>
        <button type="button" onClick={getMovies}>Søk</button>
      </form>
    </header>
    <main className="max-w-lg">
      <Movies movies={movies} sok={result ? `Du søkte etter: ${search}` : null}/> 
    </main>
  </>
);
}