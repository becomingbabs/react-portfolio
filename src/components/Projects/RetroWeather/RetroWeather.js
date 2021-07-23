import React from "react"; 
import "./RetroWeather.css";
import RetroSnapshot from "../../../imgs/retro-weather-site.png"; 

export default function RetroWeather() {
    return (
        <div>
            <h1> Retro Weather - Stay cool. </h1>
            <main className="rw-main">
                <div className="rw-snapshot">
                    <img src={RetroSnapshot}  alt="Retro Weather snapshot"/>
                </div>
                <div className="rw-text-box">
                    <ul className="rw-text">
                        <li>
                            See the full site {" "}
                            <a href="https://pensive-almeida-4cf87e.netlify.app/" target="_blank" rel="noreferrer">
                                 here 
                            </a>
                            .
                        </li>
                        <br/>
                        <li>
                            You can check out the open source code for this project {" "}
                            <a href="https://github.com/becomingbabs/my-weather-app" target="_blank" rel="noreferrer">
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
                                    Vanilla JavaScript
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
                            I originally created this app with a cloud theme for the {" "} 
                            <a href="https://www.shecodes.io/workshops" target="_blank" rel="noreferrer">
                                SheCodes
                            </a>  
                            {" "} Plus workshop that I completed. After I turned in my project, 
                            I was inspired by the colors of the Open Weather API icons to go back and play with some retro styles. 
                            This was my first introduction to Bootstrap which was a very useful tool for the grid-like design. 
                            I also had my first introduction to an API, which was more simple and more fun than I had expected.  
                            The retro theme fits well for this project as it was the very first project I completed on my own,
                            back when I first started getting serious about programming. Later on, I recreated this app using React,
                            which you can also find here under "Atmospheric Charm" in my projects. 
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
} 