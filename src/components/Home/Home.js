import React from "react"; 
import "./Home.css";
import Me from "../../imgs/mackinac.jpg"; 
import Snickering from "../../imgs/snickering-emoji.png"; 
 
function Home() {
  return (
    <div className="home">
      <header className="h-header-block">
        <h1 className="h-heading barbara-heading">
          Hi! I'm Barbara...
        </h1>
        <h2 className="h-heading babs-heading">
          ...but you can call me Babs! 
        </h2>
      </header>
      <main className="h-main">
        <div className="h-content-block">
          <div className="teacher-line">
            <p >
              I'm a Teacher, 
            </p>
          </div>
          <div className="turned-dev-line">
            <p >
              turned Junior Dev, 
            </p>
          </div>
          <div className="in-Santiago-line">
            <p >
              living in Chile.  
            </p>
          </div>
          <div className="last-line">
            <p >
              I never expected such a change, but I'm very glad I,  'took the jump...'
            </p>
            <img className="snickering-emoji" src={Snickering} alt="snickering emoji" />
          </div>
        </div>
        <div className="h-content-block">
          <img className="profile-pic" src={Me} alt="Me jumping"/>
        </div>
      </main>
    </div>
  )
}
 
export default Home;