import React, { Component } from 'react'
import Header from './header'

const REQ_MOVIE_DETAIL = `http://www.omdbapi.com/?i=`
const REQ_MOVIE_POSTER = `http://img.omdbapi.com/?i=`
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
    const style = {
      background: `url(${REQ_MOVIE_POSTER}${this.props.match.params.movieid}&apikey=${API_KEY}) no-repeat`
    }
    return(
      <div>
        <Header/>
        <div className="movie_bio_main">
            <div className="movie_bio_item">
                <span style={style}></span>
            </div>
            <div className="movie_bio_title">
                <h3>{this.state.movie.Title}</h3>
                <div className="movie_bio_plot">
                    {this.state.movie.Plot}
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Movie
