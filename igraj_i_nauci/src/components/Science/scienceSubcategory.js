import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";

const ScienceSubcategory=(props)=>{
    return(
        <div className={"lightBackground pt-3"}>

            <div className={"container d-flex justify-content-start"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pt-5 pb-5"}>
                <div className="d-grid gap-2 col-8 mx-auto">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/science/waterCirculation'}>
                        Научи ги основните природни појави</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/science/humanBody'}>
                        Научи ги основните делови на човековото тело</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/science/selectOutlier'}>
                        Одреди го натрапникот во множеството</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/science/scienceTask'}>
                        Решавај проблеми</Link>
                </div>
            </div>
        </div>
    )
}

export default ScienceSubcategory;