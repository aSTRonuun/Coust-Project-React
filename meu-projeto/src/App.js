import { useState } from 'react';
import './App.css';
import Saudacao from './components/Hook/StateLif/Saudacao';
import SeuNome from './components/Hook/StateLif/SeuNome';

function App() {
  const [name, setName] = useState();
  
  return (
    <div className="App">
        <h2>State Lift</h2>
        <SeuNome setName={setName} />
        <Saudacao name={name} />
    </div>
  );
}

export default App;
