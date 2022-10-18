import { React } from "react";
import '../App.css';
import { Projects } from "./projects";

export default function Home(){
    return (
        <div className="home-container">
        <div className="home-container-data">
        <h2 className="title">HOME</h2>
        </div>
        <div className="home-container-projects">
        <Projects/>
        </div>
        </div>


    )
}