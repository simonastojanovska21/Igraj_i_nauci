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
            <div className={"container pb-5 app"}>

                <div className={"text-center pb-3"}>
                    <span className={"h1"}>Одбери ја буквата на која започнува зборот</span>
                </div>

                <div className={"d-flex justify-content-center"}>
                    <img src={train} alt={"train word image"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '300px'}} />
                </div>

                <div className={"flex-div justify-content-center"}>
                    <div className={"flex-row mt-3"}>

                            <Link onClick={()=>props.onTryAgain('/macedonian/selectLetter') } to={'/tryAgain'}>
                                <img className={"img-fluid flex-element border border-dark me-3"} src={letterT} alt={"letterT icon"}/>
                            </Link>

                            <Link onClick={()=>props.onTryAgain('/macedonian/selectLetter') } to={'/tryAgain'}>
                                <img className={"img-fluid flex-element border border-dark  me-3"} src={letterS} alt={"letterS icon"}/>
                            </Link>

                            <Link  to={'/success'}>
                                <img className={"img-fluid flex-element border border-dark  me-3"} src={letterV} alt={"letterV icon"}/>
                            </Link>

                            <Link onClick={()=>props.onTryAgain('/macedonian/selectLetter') } to={'/tryAgain'}>
                                <img className={"img-fluid flex-element border border-dark  me-3"} src={letterN} alt={"letterN icon"}/>
                            </Link>

                            <Link onClick={()=>props.onTryAgain('/macedonian/selectLetter') }  to={'/tryAgain'}>
                                <img className={"img-fluid flex-element border border-dark  me-3"} src={letterL} alt={"letterL icon"}/>
                            </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectLetter;