import React from "react"; 
import "./BeyondEnglish.css";
import BeSnapshot from "../../../imgs/be-site.png"; 

export default function BeyondEnglish() {
    return (
        <div>
            <h1>Beyond English</h1>
            <main className="be-main">
                <div className="be-snapshot">
                    <img src={BeSnapshot}  alt="Beyond English snapshot"/>
                </div>
                <div className="be-text-box">
                    <ul className="be-text">
                        <li>
                            See the full site {" "}
                            <a href="https://beyond-english.org/" target="_blank" rel="noreferrer">
                                 here 
                            </a>
                            .
                        </li>
                        <br/>
                        <li>
                            Source code is currently private on the Beyond English Github account. 
                            If you wish to know more about the code for this project, 
                            type the site address in {" "}
                            <a href="https://web.dev/measure/" target="_blank" rel="noreferrer">
                                here
                            </a>
                            {" "} to see details on website performance. 
                        </li>
                        <br/>
                        <li>
                            Technologies & Tools used:
                            <ul>
                                <li>
                                    HTML
                                </li>
                                <li>
                                    CSS
                                </li>
                                <li>
                                    JavaScript
                                </li>
                                <li>
                                    Express.js
                                </li>
                                <li>
                                    Node.js
                                </li>
                                <li>
                                    Github
                                </li>
                                <li>
                                    DigitalOcean
                                </li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            Description: Beyond English is a B Corporation focused on English education that is comprised of all native-speaking teachers.
                            I am the primary Front-End developer on this project, and I also worked on the Back-End to make the forms functional, with some assistance. 
                            I am building a new site from scratch based on the designs given to me from the designer. 
                            Together, we are bringing the rebranding of Beyond English to life and providing them with a more functional and user-friendly site.
                            The first version is currently live, but we are still in the process of improving and building upon the initial release.
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
} 