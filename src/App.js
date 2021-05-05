import Navigation from './Components/Navigation/Nav';
import Intro from './Components/Intro/Intro'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className="main">
        <section>
          <Intro />
        </section>

        <section>
          <Intro />
        </section>
      </div>
    </div>
  );
}

export default App;
