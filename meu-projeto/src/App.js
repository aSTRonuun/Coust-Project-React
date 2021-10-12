import './App.css';

import List1 from './components/Props/PropTypes/List1';

function App() {
  
  const name = 'Vitor';

  function sum(a, b) {
    return a + b;
  }
  
  const url = 'https://via.placeholder.com/150'
  
  return (
    <div className="App">
        <List1/>
    </div>
  );
}

export default App;
