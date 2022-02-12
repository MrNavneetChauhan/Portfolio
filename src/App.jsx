import "./App.scss"


// importing all components
import { Navbar } from "./components/navbar/Navbar";
import { Work } from "./components/work/Work";
import { Techstack } from "./components/techstack/Techstack";
import { Intro } from "./components/intro/Intro";
import { Contact } from "./components/contact/Contact";
import {Menu} from "./components/menu/Menu"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Menu/>
      <div className="sections">
        <Intro/>
        <Techstack/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
