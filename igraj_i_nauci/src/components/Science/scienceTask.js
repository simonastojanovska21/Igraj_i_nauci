import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import peacocks from "../../images/science/peacocks.png";
import shadow1 from "../../images/science/shadow1.png";
import shadow2 from "../../images/science/shadow2.png";
import shadow3 from "../../images/science/shadow3.png";
import shadow4 from "../../images/science/shadow4.png";
import shadow5 from "../../images/science/shadow5.png";

const ScienceTask=(props)=>{

    return(
        <div className={"lightBackground pt-2 "}>

            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/science'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pb-5 app"}>

                <div className={"text-center pb-3"}>
                    <span className={"h1"}>Одбери ја сенката на животното на сликата</span>
                </div>

                <div className={"d-flex justify-content-center"}>
                    <img src={peacocks} alt={"guess figures image"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '300px'}} />
                </div>

                <div className={"justify-content-center mt-2 flex-div"}>
                    <div className={"flex-row mt-3"}>
                        <Link  to={'/success'}>
                            <img className={"flex-element img-fluid border border-dark me-2"} src={shadow5} alt={"shadow5 image"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/science/scienceTask') } to={'/tryAgain'}>
                            <img className={"flex-element img-fluid border border-dark me-2"} src={shadow2} alt={"shadow2 image"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/science/scienceTask') }  to={'/tryAgain'}>
                            <img className={"flex-element img-fluid border border-dark me-2"} src={shadow3} alt={"shadow3 image"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/science/scienceTask') }  to={'/tryAgain'}>
                            <img className={"flex-element img-fluid border border-dark me-2"} src={shadow4} alt={"shadow4 image"}/>
                        </Link>

                        <Link onClick={()=>props.onTryAgain('/science/scienceTask') }  to={'/tryAgain'}>
                            <img className={"flex-element img-fluid border border-dark me-2"} src={shadow1} alt={"shadow2 image"}/>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScienceTask;