import './App.css';
import Tarif from './components/tarif';

let tarif = [
  {
    name: 'Безлимитный 300',
    price: 300,
    speed: 10
  },
  {
    name: 'Безлимитный 450',
    price: 450,
    speed: 50
  },
  {
    name: 'Безлимитный 550',
    price: 550,
    speed: 100
  },
  {
    name: 'Безлимитный 1000',
    price: 1000,
    speed: 200
  },
]


function App() {
  return (
    <div className="App">
      <Tarif tarif = {tarif} ></Tarif>
    </div>
  );
}

export default App;
