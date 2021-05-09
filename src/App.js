import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CodeIcon from "./imgs/code.png";  
import Projects from './components/Projects/Projects.js'; 
import Skills from './components/Skills/Skills.js'; 
import About from './components/About/About.js'; 
import Home from "./components/Home/Home.js"; 
import './App.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import BeyondEnglish from "./components/Projects/BeyondEnglish/BeyondEnglish"; 
import WeasleyWeather from "./components/Projects/WeasleyWeather/WeasleyWeather"; 
import TardisDict from "./components/Projects/TardisDict/TardisDict"; 
import RetroWeather from "./components/Projects/RetroWeather/RetroWeather"; 
 
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav className="navigation">
        <div><img class="code-icon" src={CodeIcon} alt="code symbol"/></div>
        <ul className="navigation-sub">
          <li>
            <Link to="/" className="item">Home</Link> 
          </li>
          <li>
            <Link to="/about" className="item">About</Link> 
          </li>
          <li>
            <Link to="/skills" className="item">Skills</Link>
          </li>
          <li>
            <Link to="/projects" className="item">Projects</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/about" component={About} />
          <Route path="/beyondEnglish" component={BeyondEnglish} />
          <Route path="/weasley" component={WeasleyWeather} />
          <Route path="/tardis" component={TardisDict} />
          <Route path="/retro" component={RetroWeather} />
        </Switch>
      </main>
      <footer>
        <div>
        <a href="mailto:bajandernoa@gmail.com" class="footer__link">bajandernoa@gmail.com</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" 
                    href="https://github.com/becomingbabs"
                    target="_blank"
                    rel="noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" 
                    href="https://www.linkedin.com/in/barbara-jandernoa/"
                    target="_blank"
                    rel="noreferrer">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" 
                    href="https://twitter.com/babs_loves_you_"
                    target="_blank"
                    rel="noreferrer">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div>
          <p>
          <a
              href="https://github.com/becomingbabs/react-dictionary-app"
              id="open-source-link"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Open source code</strong>{" "}
            </a>
            by Barbara <br/> 👩🏻‍💻 <br/>  Currently located in Santiago, Chile
          </p>
        </div>
      </footer>
    </div>
  </BrowserRouter>
  );
}
 
export default App;