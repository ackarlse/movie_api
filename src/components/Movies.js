import Movie from './Movie'
export default function Movies({movies, sok}){
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