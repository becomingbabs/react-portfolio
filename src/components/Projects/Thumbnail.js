import React from 'react';
import './Thumbnail.css';
import { Link } from 'react-router-dom';

 
function Thumbnail(props) {
  return (
    <div className="project">
        <Link to={props.link}>
          <div className="project-title">{props.title}</div>
      </Link>
      <div className="project-category">{props.category}</div>
      <div className="project-image">
          <img src={props.image} alt="Project Snapshot"/>
      </div>

    </div>
  );
}
 
export default Thumbnail;