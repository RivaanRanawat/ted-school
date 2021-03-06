import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import About from "./components/About";
import Blogs from "./components/Blogs";
import LiveStream from "./components/LiveStream";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/livestream">
            <LiveStream />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
