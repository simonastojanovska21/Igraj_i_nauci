import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import letter from "../../images/macedonian/learnLetterS.gif"

const LearnLetter=(props)=>{
    return(
        <div className={"lightBackground pt-3 "}>
            <div className={"container d-flex justify-content-start"}>
                <Link className={"btn rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>
            <div className={"container pb-5 ps-5 w-50"}>
                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Денеска учиме да ја пишуваме буквата С </span>
                </div>
                <img src={letter} alt={"number gif"}
                     className={"img-fluid mx-auto d-block"} style={{maxHeight: '350px'}} />

                <div className="d-grid gap-2 pt-5">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"}
                          style={{backgroundColor: '#1483E4'}} to={'/macedonian/writeLetterAlone'}>
                        Обиди се сам</Link>
                </div>
            </div>
        </div>
    )
}

export default LearnLetter;