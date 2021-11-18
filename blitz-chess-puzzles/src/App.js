import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div> knight made by <a href="https://www.freepik.com" 
                            title="Freepik">Freepik</a> from <a 
                            href="https://www.flaticon.com/" 
                            title="Flaticon">www.flaticon.com</a>,
            pawn made by   <a href="https://www.flaticon.com/authors/pixel-perfect" 
                            title="Pixel perfect">Pixel perfect</a> from <a 
                            href="https://www.flaticon.com/" 
                            title="Flaticon">www.flaticon.com</a>,
            queen made by  <a href="https://www.flaticon.com/authors/deemakdaksina" 
                              title="deemakdaksina">deemakdaksina</a> from 
                           <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                                           
      </div>
    </div>    
  );
}

export default App;
