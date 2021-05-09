import React from "react"; 
import "./Home.css";
import Me from "../../imgs/mackinac.jpg"; 
 
function Home() {
  return (
    <div className="home">
      <header>
        <h1>
          Hi! I'm Barbara...
        </h1>
        <h2>
          ...but you can call me Babs! 
        </h2>
      </header>
      <main>
        <div className="home-content-block">
          <p className="teacher-line">
            I am an EFL Teacher, 
          </p>
          <p>
            turned Junior Front-End Developer. 
          </p>
        </div>
        <div className="home-content-block">
          <img className="profile-pic" src={Me} alt="Me jumping"/>
        </div>
      </main>
    </div>
  )
}
 
export default Home;