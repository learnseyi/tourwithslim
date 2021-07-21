import HomePage from "./pages/home/HomePage"
import './App.less';
import { BrowserRouter as Router, 
  Switch,
  Route,
  } from "react-router-dom";



const App = ()=> {
  return (
    <Router>
      <Switch>
    <div className="App">
      <header className="App-header">
        <Route path='/' component={HomePage}/>
      </header>
    </div>
    </Switch>
    </Router>
  );
}

export default App;

{/* <Route exact path="/">
  <Home />
</Route>
<Route path="/about">
  <About />
</Route>
<Route path="/dashboard">
  <Dashboard />
</Route> */}
