import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>No Food Waste</h1>
        <div>
          <p>Leftovers? Food thats gonna get bad in a couple days?</p>
          <p>And you have no clue what to do with it?</p>
          <p>We help you find a perfect and delicious recipe for it.</p>
        </div>
        <div>
          <input type="text" placeholder="Type in your incredients"/>
        </div>
        <button>Find a recipe</button>
      </header>
    </div>
  );
}

export default App;
