import './App.css';
import Lista from './components/Listas/Lista';

function App() {

  const minhasLinguagens = ['C', 'C++', 'Java', 'Typescript' , 'Javascript']
  
  return (
    <div className="App">
        <h2>Rederização de Listas</h2>
        <Lista itens={minhasLinguagens}/>
        <Lista itens={[]}/>
    </div>
  );
}

export default App;
