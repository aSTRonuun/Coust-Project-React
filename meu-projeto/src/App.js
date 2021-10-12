import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/Props/SayMyName';
import Pessoa from './components/Props/Pessoa';
import List from './components/Fragments/List';

function App() {
  
  const name = 'Vitor';

  function sum(a, b) {
    return a + b;
  }
  
  const url = 'https://via.placeholder.com/150'
  
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Vitor" />
      <Pessoa 
        nome="Vitor" 
        idade="20" 
        profissao="Programador"
        foto="https://via.placeholder.com/150"
        />
        <List/>
    </div>
  );
}

export default App;
