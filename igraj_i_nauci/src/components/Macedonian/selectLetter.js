import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import train from "../../images/macedonian/train.png";
import letterV from "../../images/macedonian/v.png";
import letterI from "../../images/macedonian/i.png";
import letterL from "../../images/macedonian/l.png";
import letterS from "../../images/macedonian/s.png";
import letterN from "../../images/macedonian/n.png";
import letterT from "../../images/macedonian/t.png";

const SelectLetter=(props)=>{
    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>
            <div className={"container pb-5 ps-5 w-75"}>

                <div className={"text-center pb-3"}>
                    <span className={"h1"}>Одбери ја буквата на која започнува зборот</span>
                </div>

                <div className={"d-flex justify-content-center"}>
                    <img src={train} alt={"train word image"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '300px'}} />
                </div>

                <div className={" d-flex justify-content-center mt-2"}>
                    <div className={"row mt-3 w-75"}>
                        <div className={"col-sm-2  d-flex justify-content-center"}>
                            <Link  to={'/tryAgain'}>
                                <img className={"img-fluid border border-dark"} src={letterT} alt={"letterT icon"}/>
                            </Link>
                        </div>

                        <div className={"col-sm-2  d-flex justify-content-center"}>
                            <Link  to={'/tryAgain'}>
                                <img className={"img-fluid  border border-dark"} src={letterS} alt={"letterS icon"}/>
                            </Link>
                        </div>

                        <div className={"col-sm-2  d-flex justify-content-center"}>
                            <Link  to={'/success'}>
                                <img className={"img-fluid border border-dark"} src={letterV} alt={"letterV icon"}/>
                            </Link>
                        </div>

                        <div className={"col-sm-2  d-flex justify-content-center"}>
                            <Link  to={'/tryAgain'}>
                                <img className={"img-fluid border border-dark"} src={letterN} alt={"letterN icon"}/>
                            </Link>
                        </div>

                        <div className={"col-sm-2  d-flex justify-content-center"}>
                            <Link  to={'/tryAgain'}>
                                <img className={"img-fluid border border-dark"} src={letterL} alt={"letterL icon"}/>
                            </Link>
                        </div>

                        <div className={"col-sm-2  d-flex justify-content-center"}>
                            <Link  to={'/tryAgain'}>
                                <img className={"img-fluid border border-dark"} src={letterI} alt={"letterI icon"}/>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectLetter;