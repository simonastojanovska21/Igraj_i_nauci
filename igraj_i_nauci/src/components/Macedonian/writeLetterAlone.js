import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import traceLetter from "../../images/macedonian/traceLetter.png";
import CanvasDraw from "react-canvas-draw";

const WriteLetterAlone=(props)=>{
    return(
        <div className={"lightBackground pt-5 "}>

            <div className={"container d-flex justify-content-start"}>
                <Link className={"btn rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian/learnLetter'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pb-5"}>
                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Обиди се сам </span>
                </div>
                <div className={"row"}>
                    <div className={"col-sm-5 mx-auto d-flex align-items-center"}>
                        <img src={traceLetter} alt={"traceLetter"}
                             className={"img-fluid mx-auto d-block"} style={{maxHeight: '350px'}} />
                    </div>
                    <div className={"col-sm-7  mx-auto d-flex justify-content-center"}>
                        <CanvasDraw
                        />
                    </div>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto pt-5">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"}
                          style={{backgroundColor: '#1483E4'}} to={'/success'}>
                        Продолжи</Link>
                </div>

            </div>
        </div>
    )
}

export default WriteLetterAlone;