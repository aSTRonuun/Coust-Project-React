import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";


function App() {
  
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/empresa">
          <Empresa/>
        </Route>
        <Route path="/contato">
          <Contato/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
