import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import SearchExercise from "./components/SearchExercise";
import ExercisesList from "./components/ExercisesList";
import FetchData from "./utils/FetchData";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
      <Hero />
      {/* <SearchExercise /> */}
      <ExercisesList />
      <FetchData />
    </Router>
  );
}

export default App;
