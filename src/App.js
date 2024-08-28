import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavComponent from './components/NavComponent';
import FooterComp from './components/FooterComp';
import MoviesComp from './components/MoviesComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TVShows from './components/TvShows';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavComponent />
      </header>

      <main>
        <Routes>
          <Route path='/' element={
            <>
              <MoviesComp title='Predator Saga' urlForFetch='https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s=Predator' />
              <MoviesComp title='Toretto Saga' urlForFetch='https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s=Fast&Furious' />
              <MoviesComp title='Alien Saga' urlForFetch='https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s=Alien' />
            </>
          } />
          <Route path='/tv-shows' element={<TVShows />}/>
          <Route path='/movie-details/:movieID' element />

        </Routes>

      </main>

      <footer>
        <FooterComp />
      </footer>
    </BrowserRouter>
  );
}

export default App;
