import React from 'react';
import './MySkills.css';
import myskills from "./myskills.svg";

function MySkills(){
    return(
        <div className=" my-skills flex justify-around items-center w-100 pa3 " >
            <div className="skills-text pa2 ">
                <h2>Our Skills</h2>
                <p>
                We focus on providing short term investing solutions with guaranteed returns at<span className="b"> Zero Risk.</span>
                </p>
                <p>
                We have professionals for every need.
                </p>
                <div >
                    <div >
                        <div className="percent-bars flex inline justify-between ">
                            <p style={{textAlign:"left"}}>Cryptocurrency investment</p>
                            <p style={{textAlign:"right"}}>60%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-ui" per="90"></div>
                        </div>
                    </div>
                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Health Insurance</p>
                            <p style={{textAlign:"right"}}>85%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-ideas" per="90"></div>
                        </div>
                    </div>
                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Legal and tax advisory</p>
                            <p style={{textAlign:"right"}}>75%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-marketing" per="90"></div>
                        </div>
                    </div>
                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Professional training provider in stock market trading and investing</p>
                            <p style={{textAlign:"right"}}>85%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-consultation" per="90"></div>
                        </div>
                    </div>
                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Real estate - investing, decor</p>
                            <p style={{textAlign:"right"}}>85%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-consultation" per="90"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center skills-img">
                <img src={myskills} className="skills-image" alt="skills"/>
            </div>
        </div>
    )
}

export default MySkills;