import './App.css';

import List1 from './components/Props/PropTypes/List1';
import Evento from './components/Eventos/Evento';
import Form1 from './components/Hook/Forms1';

function App() {
  
  const name = 'Vitor';

  function sum(a, b) {
    return a + b;
  }
  
  const url = 'https://via.placeholder.com/150'
  
  return (
    <div className="App">
        <h2>Testando Eventos</h2>
        <Form1/>
    </div>
  );
}

export default App;
