import React from "react";
import "./WeasleyWeather.css";
import WeasleySnapshot from "../../../imgs/weasley-weather-site.png"

export default function WeasleyWeather() {
    return (
        <div>
            <h1>Weasley's Weather in a bottle</h1>
            <main className="ww-main">
                <div className="ww-snapshot">
                    <img src={WeasleySnapshot}  alt="Weasley Weather snapshot"/>
                </div>
                <div className="ww-text-box">
                    <ul className="ww-text">
                        <li>
                            See the full site {" "}
                            <a href="https://tender-cray-ea83e7.netlify.app/" target="_blank" rel="noreferrer">
                                 here 
                            </a>
                            .
                        </li>
                        <br/>
                        <li>
                            You can check out the open source code for this project {" "}
                            <a href="https://github.com/becomingbabs/react-weather-app" target="_blank" rel="noreferrer">
                                 here 
                            </a>
                            .
                        </li>
                        <br/>
                        <li>
                            Technologies & Tools used:  
                            <ul>
                                <li>
                                    HTML
                                </li>
                                <li>
                                    CSS & Bootstrap
                                </li>
                                <li>
                                    React
                                </li>
                                <li>
                                    Github
                                </li>
                                <li>
                                    Netlify
                                </li>
                                <li>
                                    Open Weather API
                                </li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            This project looked very different when I turned it in during the {" "} 
                            <a href="https://www.shecodes.io/workshops" target="_blank" rel="noreferrer">
                                SheCodes
                            </a>  
                            {" "} React workshop that I completed. It had a simple, pretty cloud theme, 
                            but as an avid Harry Potter fan (books not movies), I decided to have some fun restyling it to a much more colorful theme. 
                            I really enjoyed the ease of organizing this page cleanly with Bootsrap, 
                            but I would love to play around with it some more and try to restyle everything with pure CSS.
                            I used the React Animated Weather component for one of my favorite parts of this project, the cute lil' animated icons.
                            Harry Potter fans will know the title comes from an actual product in the Weasley twins' joke shop,
                            which I thought fit very nicely for the name of this project.
                            This project was my first introduction into React, and I really enjoyed learning the concept of components. 
                            The very first version of this project was actually created with vanilla JavaScript, 
                            but here I was able to improve the organization of my code and my design using React.  
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
} 