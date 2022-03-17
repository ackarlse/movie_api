export default function Movie({title, img}){
  
    return (
        <article>
          <h3>{title}</h3>
          <img src={img} alt={title}/>
        </article>
    )
}