import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'


//Components
import MovieList from './components/movielist'
import Home from './components/home'
import Movie from './components/movie'


const App = () => {

   return(
       <BrowserRouter>
           <div>
               <Route exact path="/" component={Home}/>
               <Route path="/movielist" component={MovieList}/>
               <Route path="/movie/:movieid" component={Movie}/>
           </div>
       </BrowserRouter>
   )
}

ReactDOM.render(<App/>, document.getElementById('root'))
