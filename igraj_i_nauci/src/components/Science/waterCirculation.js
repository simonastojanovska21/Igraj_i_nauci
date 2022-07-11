import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import waterCirculation from "../../images/science/water_circulation.png";

const WaterCirculation=(props)=>{

    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/science'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pb-5"}>

                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Разгледај го кружењето на водата во природата</span>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <img src={waterCirculation} alt={"humanBody image"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '500px'}} />
                </div>

                <div className="d-grid gap-2 col-6 mx-auto pt-5">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"}
                          style={{backgroundColor: '#1483E4'}} to={'/science/waterCirculationFillOut'}>
                        Провери го знаењето</Link>
                </div>

            </div>
        </div>
    )
}

export default WaterCirculation;