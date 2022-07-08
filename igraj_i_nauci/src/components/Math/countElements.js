import React from "react";
import {Link} from "react-router-dom";
import sun from "../../images/math/sun.png";
import reset from "../../images/reset.png";
import back from "../../images/back.png";
import one from "../../images/math/one.png";
import two from "../../images/math/two.png";
import three from "../../images/math/three.png";
import four from "../../images/math/four.png";
import five from "../../images/math/five.png";
import six from "../../images/math/six.png";

const CountElements=(props)=>{
    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>
            <div className={"container pb-5 ps-5 w-50"}>

                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Одбери го точниот број на фигури</span>
                </div>

                <div className={"d-flex justify-content-center"}>
                    <img src={sun} alt={"count sun image pb-3"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '300px'}} />
                </div>

                <div className={"row mt-3"}>
                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid border border-dark"} src={one} alt={"one icon"}/>
                        </Link>
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid  border border-dark"} src={two} alt={"two icon"}/>
                        </Link>
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid border border-dark"} src={three} alt={"three icon"}/>
                        </Link>
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid border border-dark"} src={four} alt={"four icon"}/>
                        </Link>
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/success'}>
                            <img className={"img-fluid border border-dark"} src={five} alt={"five icon"}/>
                        </Link>
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid border border-dark"} src={six} alt={"six icon"}/>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CountElements;