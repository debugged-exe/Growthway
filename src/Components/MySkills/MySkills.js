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
                            <p style={{textAlign:"left"}}>Customer Satisfaction</p>
                            <p style={{textAlign:"right"}}>92%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-customer-satisfaction" per="92"></div>
                        </div>
                    </div>


                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Health Insurance</p>
                            <p style={{textAlign:"right"}}>85%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-health-insurance" per="90"></div>
                        </div>
                    </div>


                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Legal and tax advisory</p>
                            <p style={{textAlign:"right"}}>75%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-legal-tax" per="75"></div>
                        </div>
                    </div>


                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Customer Royalty Rate</p>
                            <p style={{textAlign:"right"}}>87%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-customer-royalty" per="87"></div>
                        </div>
                    </div>
                    <div >
                        <div className="percent-bars flex inline justify-between">
                            <p style={{textAlign:"left"}}>Real estate - investing, decor</p>
                            <p style={{textAlign:"right"}}>85%</p>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-per-real-estate" per="85"></div>
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