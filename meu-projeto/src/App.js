import './App.css';

function App() {
  
  const name = 'Vitor';

  function sum(a, b) {
    return a + b;
  }
  
  const url = 'https://via.placeholder.com/150'
  
  return (
    <div className="App">
      <h2>Hello World from React</h2>
      <p>Olá, {name}</p>
      <p>Soma: {sum(5, 8)}</p>
      <img src= {url} alt='Minha imagem' />
    </div>
  );
}

export default App;
