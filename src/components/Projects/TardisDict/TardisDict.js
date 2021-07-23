import React from "react"; 
import "./TardisDict.css";
import TardisSnapshot from "../../../imgs/tardis-site.png"; 

export default function TardisDict() {
    return (
        <div>
            <h1>TARDictionary</h1>
            <main className="td-main">
                <div className="td-snapshot">
                    <img src={TardisSnapshot}  alt="TARDIS Dictionary snapshot"/>
                </div>
                <div className="td-text-box">
                    <ul className="td-text">
                        <li>
                            See the full site {" "}
                            <a href="https://objective-engelbart-fc143e.netlify.app/" target="_blank" rel="noreferrer">
                                 here 
                            </a>
                            .
                        </li>
                        <br/>
                        <li>
                            You can check out the open source code for this project {" "}
                            <a href="https://github.com/becomingbabs/react-dictionary-app" target="_blank" rel="noreferrer">
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
                                    CSS 
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
                                    Free Dictionary APIs
                                </li>
                                <li>
                                    Pexels APIs
                                </li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            This was a second project idea offered through the {" "} 
                            <a href="https://www.shecodes.io/workshops" target="_blank" rel="noreferrer">
                                SheCodes
                            </a>  
                            {" "} React workshop that I completed. 
                            I took advantage of this opportunity to continue practicing my skills with React and CSS Grid,
                            not depending on Bootstrap as I had with previous projects, such as my weather apps that you can also find here in 'projects.'
                            I was inspired by the educational nature of this project to incorporate the theme of my favorite series, Doctor Who.
                            If you're a fan, you will know the TARDIS is the Doctor's beloved spaceship, hence the play on words in the title. 
                            I had an easier time using React with this project as it wasn't my first time -
                            this allowed me to focus more on experimenting with responsive design for a clean mobile version as well. 
                            I've thought about experimenting with this more in the future to turn it into a live mobile app for practice and also for fun -  
                            it would go great with the heavy Doctor Who aesthetic that already exists on my phone. 
                        </li>
                    </ul>
                </div>
            </main>
            <a href="https://objective-engelbart-fc143e.netlify.app/">

            </a>
        </div>
    )
} 