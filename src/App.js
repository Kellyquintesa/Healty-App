import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchExercise from "./components/SearchExercise";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
      <Hero />
      <SearchExercise />
    </Router>
  );
}

export default App;
