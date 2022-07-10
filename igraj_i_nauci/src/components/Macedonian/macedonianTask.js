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
            <div className={"container pb-5 ps-5 w-50"}>

                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Одбери ја буквата која недостасува</span>
                </div>

                <div className={"row mt-3 d-flex justify-content-center"}>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <img className={"img-fluid"} src={letterD} alt={"letterD icon"}/>
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <img className={"img-fluid "} src={letterE} alt={"letterE icon"}/>
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center border border-dark"}>
                        <div className={"img-fluid "} />
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <img className={"img-fluid"} src={letterE} alt={"letterE icon"}/>
                    </div>

                </div>

                <br/>
                <br/>

                <div className={"row mt-3"}>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid border border-dark"} src={letterS} alt={"letterS icon"}/>
                        </Link>
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/success'}>
                            <img className={"img-fluid border border-dark"} src={letterT} alt={"letterT icon"}/>
                        </Link>
                    </div>

                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid  border border-dark"} src={letterN} alt={"letterN icon"}/>
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



                    <div className={"col-sm-2  d-flex justify-content-center"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"img-fluid border border-dark"} src={letterV} alt={"letterV icon"}/>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MacedonianTask;