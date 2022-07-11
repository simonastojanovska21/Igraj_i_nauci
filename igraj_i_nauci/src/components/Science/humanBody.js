import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import humanBody from "../../images/science/humanBody.jpg";

const HumanBody=(props)=>{

    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/science'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pb-5"}>

                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Разгледај ги деловите на човековото тело</span>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <img src={humanBody} alt={"humanBody image"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '500px'}} />
                </div>


            </div>
        </div>
    )

}

export default HumanBody;