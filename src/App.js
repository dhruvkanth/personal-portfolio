import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavBar} from "./components/NavBar";
import {Hero} from "./components/Hero";
import {Skills} from "./components/Skills"
import {Projects} from "./components/Projects";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Hero/>
            <Skills />
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
