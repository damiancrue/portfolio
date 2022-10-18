import { React } from "react";
import '../App.css';
import { Projects } from "./projects";
import {AboutMeSummary} from "./aboutme";

export default function Home(){
    return (
        <div className="home-container">
        <div className="home-container-data">
        <div>
        <h2 className="title">ABOUT ME</h2>
        <AboutMeSummary/>
        </div>
        </div>
        <div className="home-container-projects">
        <Projects/>
        </div>
        </div>


    )
}