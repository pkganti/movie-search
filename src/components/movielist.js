import React  from 'react'
import { Link } from 'react-router-dom'

const MovieList = (props) => {

  const list = ({allMovies}) =>{
    if(allMovies){
      console.log(allMovies)
      return allMovies.map((item) =>{
        const style = {
          background: `url('${item.Poster}') no-repeat`
        }
        return(
            <Link key={item.imdbID} to={`/movie/${item.imdbID}`}
                className="movie_item"
                style={style}
            >
                <div>{item.Title}</div>
                
            </Link>
        )
      })
    }
  }
  return(
      <div className='movie_list'>
          <h4>Browse the movies</h4>
          {list(props)}
      </div>
  ) 
}

export default MovieList
