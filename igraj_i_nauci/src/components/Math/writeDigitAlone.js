import React from "react";
import CanvasDraw from "react-canvas-draw";
import {Link} from "react-router-dom";
import back from "../../images/back.png";


const writeDigitAlone=(props)=>{

    console.log(props.digit)
    return(
        <div className={"lightBackground pt-5 "}>

            <div className={"container d-flex justify-content-start"}>
                <Link className={"btn rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/learnDigits'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pb-5 w-50"}>
                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Обиди се сам </span>
                </div>
                <div className={"row"}>
                    <div className={"col-sm-5 d-flex align-items-center"}>
                        <img src={require(`../../images/digitsOutline/${props.digit}.png`)} alt={"number"}
                             className={"img-fluid mx-auto d-block"} style={{maxHeight: '350px'}} />
                    </div>
                    <div className={"col-sm-7 d-flex align-items-center"}>
                        <CanvasDraw
                        />
                    </div>
                </div>

                <div className="d-grid gap-2 pt-5">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"}
                          style={{backgroundColor: '#1483E4'}} to={'/success'}>
                        Продолжи</Link>
                </div>

            </div>
        </div>
    )
}

export default writeDigitAlone;