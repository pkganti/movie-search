import React, { Component } from 'react'

import Banner from '../components/banner'
import MovieList from '../components/movielist'
const URL_MOVIE_API = 'http://www.omdbapi.com/?s=jaws&apikey=fc4557f7'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: ''
    }
  }

  componentDidMount(){
    fetch(URL_MOVIE_API, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        movies: json['Search']
      })
    })
  }

  render(){
    return(
        
        <div>
            <Banner></Banner>
            <MovieList allMovies={this.state.movies}></MovieList>
        </div>
    )
  }

}

export default Home
