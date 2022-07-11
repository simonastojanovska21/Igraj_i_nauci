import React from "react";
import tryAgain from "../../images/try again.jpg";
import {Link} from "react-router-dom";

const TryAgain=(props)=>{
    return(
        <div className={"lightBackground pt-5 "}>
            <div className={"container pb-5"}>

                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Тоа не е точниот одговор. Обиди се повторно.</span>
                </div>

                <div className={"d-flex justify-content-center"}>
                    <img src={tryAgain} alt={"tryAgain image"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '300px'}} />
                </div>

                <div className="d-grid gap-2 col-6 mx-auto pt-5">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"}
                          style={{backgroundColor: '#1483E4'}} to={props.location}>
                        Обиди се повторно</Link>
                </div>
            </div>
        </div>
    )
}

export default TryAgain;