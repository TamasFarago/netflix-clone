import './App.css';
import Home from "./pages/home"
import Grid from "./components/grid/Grid"
import Accordion from "./components/accordion/Accordion"

function App() {
  return (
    <div className="app">
      <Home />
      <Grid />
      <Accordion />
    </div>
  );
}

export default App;
