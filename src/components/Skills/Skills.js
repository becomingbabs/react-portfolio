import React from "react"
import "./Skills.css";
 
function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="s-content">
        <div>
          <strong>Languages:</strong>
            <li>CSS</li>
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>Node.js</li>
        </div>
        <div>
          <strong>Libraries & Frameworks:</strong>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>MERN stack</li>
        </div>
        <div>
          <strong>Tools:</strong>
            <li>Chrome Dev</li>
            <li>Command Line</li>
            <li>Git</li>
            <li>Github</li>
            <li>Postman</li>
            <li>DigitalOcean</li>
        </div>
        </div>
      </div>
  );
}
 
export default Skills;