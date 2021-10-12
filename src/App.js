
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Navbar from './Components/layout/Navbar';
import AddUser from "./Components/users/AddUser";
import EditUser from "./Components/users/EditUser";
import Use from "./Components/users/Use";

import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
   <Router>
      <div className="App">
       <Navbar/>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/usersss/add" component={AddUser}/>
       <Route exact path="/userss/edit/:id" component={EditUser}/>
       <Route exact path="/users/:id" component={Use}/>
         
       </Switch>

     
    </div>
   </Router>
  );
}

export default App;
