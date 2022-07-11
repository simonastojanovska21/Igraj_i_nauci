import React from "react";
import {Link} from "react-router-dom";
import success from "../../images/success.jpg";

const Success=(props)=>{
    return(
        <div className={"lightBackground pt-5 "}>
            <div className={"container pb-5 ps-5"}>

                <div className={"text-center pb-5"}>
                    <span className={"h1"}>Одлично.</span>
                </div>


                <div className={"d-flex justify-content-center"}>
                    <img src={success} alt={"success image"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '500px'}} />
                </div>

                <div className="d-grid gap-2 col-6 mx-auto pt-5">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"}
                          style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Врати се на почеток</Link>
                </div>
            </div>
        </div>
    )
}

export default Success;