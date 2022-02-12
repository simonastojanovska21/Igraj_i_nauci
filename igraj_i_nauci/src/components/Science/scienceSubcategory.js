import React from "react";
import {Link} from "react-router-dom";

const ScienceSubcategory=(props)=>{
    return(
        <div className={"lightBackground pt-5 "}>
            <div className={"container-lg pt-5 pb-5 ps-5 w-50"}>
                <div className="d-grid gap-2 ">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Научи ги основните природни појави</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Научи ги основните делови на човековото тело</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Одреди го натрапникот во множеството</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Решавај проблеми</Link>
                </div>
            </div>
        </div>
    )
}

export default ScienceSubcategory;