import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import equals from "../../images/math/equals.png";
import two from "../../images/math/two.png";
import three from "../../images/math/three.png";
import eight from "../../images/math/eight.png";
import five from "../../images/math/five.png";
import six from "../../images/math/six.png";
import seven from "../../images/math/seven.png";
import nine from "../../images/math/nine.png"
import plus from "../../images/math/plus.png";

const MathTasks=(props)=>{
    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>
            <div className={"container pb-5 app"}>

                <div className={"text-center"}>
                    <span className={"h1"}>Одбери го точниот одговор</span>
                </div>

                <div className={"flex-div justify-content-center"}>
                    <div className={"flex-row mt-3"}>

                        <img className={"img-fluid flex-element"} src={two} alt={"two icon"}/>

                        <img className={"img-fluid flex-element"} src={plus} alt={"plus icon"}/>

                        <img className={"img-fluid flex-element"} src={three} alt={"six icon"}/>

                        <img className={"img-fluid flex-element"} src={equals} alt={"equals icon"}/>

                        <div className={"img-fluid flex-element  border border-dark"} />

                    </div>
                </div>

                <div className={"flex-div justify-content-center"}>
                    <div className={"flex-row mt-3"}>

                        <Link onClick={()=>props.onTryAgain('/math/mathTasks') } to={'/tryAgain'}>
                            <img className={"img-fluid flex-element border border-dark"} src={seven} alt={"seven icon"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/math/mathTasks') }  to={'/tryAgain'}>
                            <img className={"img-fluid flex-element border border-dark"} src={two} alt={"two icon"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/math/mathTasks') }  to={'/tryAgain'}>
                            <img className={"img-fluid flex-element border border-dark"} src={eight} alt={"eight icon"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/math/mathTasks') }  to={'/tryAgain'}>
                            <img className={"img-fluid flex-element border border-dark"} src={six} alt={"six icon"}/>
                        </Link>

                        <Link  to={'/success'}>
                            <img className={"img-fluid flex-element border border-dark"} src={five} alt={"five icon"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/math/mathTasks') } to={'/tryAgain'}>
                            <img className={"img-fluid flex-element border border-dark"} src={nine} alt={"nine icon"}/>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MathTasks;