import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import word from "../../images/macedonian/avion.png";
import two from "../../images/math/two.png";
import five from "../../images/math/five.png";
import six from "../../images/math/six.png";
import seven from "../../images/math/seven.png";
import nine from "../../images/math/nine.png";
import eight from "../../images/math/eight.png";

const CountLetters=(props)=>{
    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>
            <div className={"container pb-5 app"}>

                <div className={"text-center pb-3"}>
                    <span className={"h1"}>Одбери го точниот број на гласови во зборот</span>
                </div>

                <div className={"d-flex justify-content-center"}>
                    <img src={word} alt={"count word image"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '300px'}} />
                </div>

                <div className={"flex-div justify-content-center"}>
                    <div className={"flex-row mt-3"}>

                            <Link onClick={()=>props.onTryAgain('/macedonian/countLetters') }  to={'/tryAgain'}>
                                <img className={"img-fluid flex-element border border-dark"} src={seven} alt={"seven icon"}/>
                            </Link>

                            <Link onClick={()=>props.onTryAgain('/macedonian/countLetters') }  to={'/tryAgain'}>
                                <img className={"img-fluid flex-element border border-dark"} src={two} alt={"two icon"}/>
                            </Link>

                            <Link onClick={()=>props.onTryAgain('/macedonian/countLetters') }  to={'/tryAgain'}>
                                <img className={"img-fluid flex-element border border-dark"} src={six} alt={"six icon"}/>
                            </Link>

                            <Link onClick={()=>props.onTryAgain('/macedonian/countLetters') }  to={'/tryAgain'}>
                                <img className={"img-fluid flex-element border border-dark"} src={nine} alt={"nine icon"}/>
                            </Link>

                            <Link  to={'/success'}>
                                <img className={"img-fluid flex-element border border-dark"} src={five} alt={"five icon"}/>
                            </Link>

                            <Link onClick={()=>props.onTryAgain('/macedonian/countLetters') }  to={'/tryAgain'}>
                                <img className={"img-fluid flex-element border border-dark"} src={eight} alt={"eight icon"}/>
                            </Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountLetters;