import React from "react";
import {Link} from "react-router-dom";

const GamesSubcategory=(props)=>{
    return(
        <div className={"lightBackground pt-5 "}>
            <div className={"container-lg pt-5 pb-5 ps-5 w-50"}>
                <div className="d-grid gap-2 ">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Играј бесилка</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Играј бинго</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Играј игра на меморија</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Играј snake</Link>
                </div>
            </div>
        </div>
    )
}

export default GamesSubcategory;