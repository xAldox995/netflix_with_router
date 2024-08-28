import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavComponent from './components/NavComponent';
import FooterComp from './components/FooterComp';
import MoviesComp from './components/MoviesComp';

function App() {
  return (
    <>
      <header>
        <NavComponent />
      </header>

      <main>
        <MoviesComp title='Predator Saga' urlForFetch='https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s=Predator' />
        <MoviesComp title='Toretto Saga' urlForFetch='https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s=Fast&Furious' />
        <MoviesComp title='Alien Saga' urlForFetch='https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s=Alien' />
      </main>

      <footer>
        <FooterComp />
      </footer>
    </>
  );
}

export default App;
