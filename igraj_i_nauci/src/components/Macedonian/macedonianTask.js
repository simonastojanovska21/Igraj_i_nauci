import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import letterD from "../../images/macedonian/d.png";
import letterE from "../../images/macedonian/e.png";
import letterT from "../../images/macedonian/t.png";
import letterV from "../../images/macedonian/v.png";
import letterI from "../../images/macedonian/i.png";
import letterL from "../../images/macedonian/l.png";
import letterS from "../../images/macedonian/s.png";
import letterN from "../../images/macedonian/n.png";


const MacedonianTask=(props)=>{
    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>
            <div className={"container pb-5 app"}>

                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Одбери ја буквата која недостасува</span>
                </div>

                <div className={"flex-div justify-content-center"}>
                    <div className={"flex-row mt-3"}>

                        <img className={"img-fluid flex-element"} src={letterD} alt={"letterD icon"}/>

                        <img className={"img-fluid flex-element"} src={letterE} alt={"letterE icon"}/>

                        <div className={"img-fluid flex-element  border border-dark"} />

                        <img className={"img-fluid flex-element"} src={letterE} alt={"letterE icon"}/>

                    </div>
                </div>

                <div className={"flex-div justify-content-center"}>
                    <div className={"flex-row mt-3"}>

                        <Link onClick={()=>props.onTryAgain('/macedonian/macedonianTasks') } to={'/tryAgain'}>
                            <img className={"img-fluid flex-element border border-dark me-3"} src={letterS} alt={"letterS icon"}/>
                        </Link>

                        <Link  to={'/success'}>
                            <img className={"img-fluid flex-element border border-dark me-3"} src={letterT} alt={"letterT icon"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/macedonian/macedonianTasks') }  to={'/tryAgain'}>
                            <img className={"img-fluid flex-element border border-dark me-3"} src={letterN} alt={"letterN icon"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/macedonian/macedonianTasks') }  to={'/tryAgain'}>
                            <img className={"img-fluid flex-element border border-dark me-3"} src={letterL} alt={"letterL icon"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/macedonian/macedonianTasks') }  to={'/tryAgain'}>
                            <img className={"img-fluid flex-element border border-dark"} src={letterV} alt={"letterV icon"}/>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MacedonianTask;