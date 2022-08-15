import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <Saludo usuario="Irwinet" mensaje="Hola Mundo"></Saludo>
    </div>
  );
}

export default App;
