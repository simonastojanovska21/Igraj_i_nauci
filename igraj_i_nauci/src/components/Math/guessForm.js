import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import figures from "../../images/math/circle form.png";
import circle from "../../images/math/circle.png";
import star from "../../images/math/star.png";
import triangle from "../../images/math/triangle.png";

const GuessForm=(props)=>{

    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>
            <div className={"container pb-5 w-50"}>

                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Одбери ја вистинската форма на фигурите</span>
                </div>
               <div className={"d-flex justify-content-center"}>
                   <img src={figures} alt={"guess figures image"}
                        className={"img-fluid mx-auto d-block"} style={{maxHeight: '300px'}} />
               </div>

                <br/>
                <div className={"row mt-3 "}>
                    <div className={"col-sm-4 d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid border border-dark"} src={triangle} alt={"triangle icon"}/>
                        </Link>
                    </div>

                    <div className={"col-sm-4 d-flex justify-content-center"}>
                        <Link  to={'/success'}>
                            <img className={"img-fluid border border-dark"} src={circle} alt={"circle icon"} />
                        </Link>
                    </div>

                    <div className={"col-sm-4 d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid border border-dark"} src={star} alt={"star icon"} />
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default GuessForm;