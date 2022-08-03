import './App.css';

import Header from './components/Header/Header';
import Navbar from '/components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header className="App-navbar" />
      <Navbar className="App-sidebar" />
    </div>
  );
}

export default App;
