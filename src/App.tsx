import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import {MovieProps} from "./components/Movie";

const movies = [
  {
    director: {
      name: 'Muccino',
      oscar: false
    },
    title: 'uno',
    year: 2010,
  },
  {
    title: 'due',
    year: 2010
  },
  {
    director: {
      name: 'Muccino',
      oscar: true
    },
    title: 'tre',
    year: 2020
  }
];

function getMovies(): Promise<MovieProps[]> {
  return new Promise((resolve, reject) => {
    resolve(movies);
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Movies movies={movies} />
      </header>
    </div>
  );
}

export default App;
