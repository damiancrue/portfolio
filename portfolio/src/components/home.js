import { React } from "react";
import '../App.css';
import { Projects } from "./projects";
import {AboutMeSummary} from "./aboutme";
import Anim from "./anim"

export default function Home(){
    return (
        <div className="home-container">
        <div className="home-container-projects">
        {/* <h2>MY WORK</h2>
        <Projects/> */}
        <Anim/>
        </div>
        <div className="home-container-data">
        <div>
        <h2>ABOUT ME</h2>
        <AboutMeSummary/>
        </div>
        </div>

        </div>


    )
}