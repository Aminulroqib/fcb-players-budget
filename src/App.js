import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header.js';
import PlayersData from './components/Players Data/PlayersData'
import Players from './Players/Players';

function App() {
  return (
    <div>
      <Header></Header>
      <PlayersData></PlayersData>
      <Players></Players>
      
    </div>
  );
}

export default App;
