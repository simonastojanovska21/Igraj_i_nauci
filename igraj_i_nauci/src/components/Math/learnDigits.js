import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";

const LearnDigits=(props)=>{

    let number = Math.floor(Math.random() * 10);

    return(
        <div className={"lightBackground pt-3 "}>
            <div className={"container d-flex justify-content-start"}>
                <Link className={"btn rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>
            <div className={"container pb-5 ps-5 w-50"}>
                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Денеска ја пишуваме цифрата {number} </span>
                </div>
                <img src={require('../../images/digits/'+ number +'.gif')} alt={"number gif"}
                     className={"img-fluid mx-auto d-block"} style={{maxHeight: '350px'}} />

                <div className="d-grid gap-2 pt-5">
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"}
                      onClick = { ()=>props.onGenerateDigit(number) }
                      style={{backgroundColor: '#1483E4'}} to={'/math/writeDigitAlone'}>
                    Обиди се сам</Link>
                </div>
            </div>
        </div>
    )
}

export default LearnDigits;