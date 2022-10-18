import work from './mywork'
import '../App.css';
import {React} from "react";

import { useParams } from "react-router-dom";


export function Project(){

let id = useParams().id
let pre = work.filter(i=>id==i.id)
let pro = pre[0]
    return (
        <div >
            <h3>{id}</h3>
            <h3>{pro.name}</h3>
            <h3>{pro.detail}</h3>
            <img src={pro.img} alt='no cargo la imagen'/>
        </div>
        )
    }
