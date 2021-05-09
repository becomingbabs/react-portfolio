import React from "react"; 
import Thumbnail from "./Thumbnail"; 
import './Projects.css';
import Tardis from "../../imgs/tardis-thumbnail.png"; 
import Weasley from "../../imgs/weasley-weather-thumbnail.png";
import BE from "../../imgs/be-site-thumbnail.png"; 
import Retro from "../../imgs/retro-weather-thumbnail.png"; 
 
function Projects(props) {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-grid">
            <Thumbnail
            link="/beyondEnglish"
            image={BE}
            title="Beyond English"
            category="Website"
            />
            <Thumbnail
            link="/weasley"
            image={Weasley}
            title="Atmospheric Charm"
            category="Weather App"
            />
            <Thumbnail
            link="/tardis"
            image={Tardis}
            title="TARDictionary"
            category="Dictionary App"
            />   
            <Thumbnail
            link="/retro"
            image={Retro}
            title="Retro Weather"
            category="Weather App"
            />
      </div>
    </div>
  )
}
 
export default Projects;