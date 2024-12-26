import About from "./About";
import Contact from "./Contact";
import Greeting from "./Greeting";
import Home from "./Home";

function App() {

  return (
    <div>
  <h1> Hello from ReactJS</h1>
  <Home name = {"Srihari"} />
  <About />
  <Contact />
  <Greeting name = {"Srihari"} />
  <Greeting name = {"Srihari"} />
  </div>
  );
}

export default App;
