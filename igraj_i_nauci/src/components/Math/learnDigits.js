import React from "react";
import gif from "../../images/digits/0.gif"
import {Link} from "react-router-dom";

const LearnDigits=(props)=>{
    return(
        <div className={"lightBackground pt-5 "}>
            <div className={"container pb-5 ps-5 w-50"}>
                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Денеска ја пишуваме цифрата </span>
                </div>
                <img src={require('../../images/digits/0.gif')}
                     className={"img-fluid mx-auto d-block"} style={{maxHeight: '350px'}} />

                <div className="d-grid gap-2 pt-5">
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/'}>
                    Обиди се сам</Link>
                </div>
            </div>
        </div>
    )
}

export default LearnDigits;