import "./App.css"
import Home from "./components/homePage";
import Header from "./components/header";
import Destination from "./components/destinationPage";
import Crew from "./components/crewpage";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Technology from "./components/technologyPage";



function App() {
  

  return (
    <Router>
      <div className="App">   
        <Header/>
          <Switch>
            <Route exact path= "/">
               <Home /> 
            </Route>

            <Route path = "/destination"> 
              <Destination /> 
            </Route>

            <Route path = "/crew">
              <Crew/>
            </Route>

            <Route path = "/technology">
              <Technology/>
            </Route>
          </Switch>
     
      </div>
    </Router>
      
  );
}

export default App;