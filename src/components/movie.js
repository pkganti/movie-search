import React, { Component } from 'react'
import Header from './header'

const REQ_MOVIE_DETAIL = `http://www.omdbapi.com/?i=`
const API_KEY = 'fc4557f7'

class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movie: ''
    }
  }

  componentDidMount(){
    fetch(`${REQ_MOVIE_DETAIL}${this.props.match.params.movieid}&apikey=${API_KEY}`, {
        method:'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        movie: json
      })
    })
  }

  render(){
    return(
      <div>
        <Header/>
        <div className="movie_bio">
            <div className="avatar">
                <span style={{background:`url('${this.state.movie.Poster}') no-repeat`}}></span>
            </div>
            <div className="bio">
                <h3>{this.state.movie.Title}</h3>
                <div className="bio_text">
                    {this.state.movie.Plot}
                </div>

            </div>
        </div>
      </div>
    )
  }
}

export default Movie

