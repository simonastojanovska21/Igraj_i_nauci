import React from "react";
import matematika from "../../images/matematika.png"
import makedonski from "../../images/makedonski.png"
import prirodni from "../../images/prirodni.png"
import igri from "../../images/igri.png"
import {Link} from "react-router-dom";

const Categories=(props)=>{
    return(
        <div className={"container-fluid lightBackground pt-5"}>
            <div className={"container pb-5 ps-5"}>
                <div className={"text-center pb-5 "}>
                    <span className={"h1"}>Што сакаш да учиш денеска?</span>
                </div>

                <div className={"row"}>
                    <div className={"col text-center"} >
                        <Link to={"/math"}>
                            <img src={matematika} className={"img-fluid mx-auto d-block"} alt={"matematika"}/>
                        </Link>
                    </div>

                    <div className={"col text-center"} >
                        <Link to={"/macedonian"}>
                            <img src={makedonski} className={"img-fluid mx-auto d-block"} alt={"makedonski"}/>
                        </Link>
                    </div>

                    <div className={"col text-center"} >
                        <Link to={"/science"}>
                            <img src={prirodni} className={"img-fluid mx-auto d-block"} alt={"prirodni nauki"}/>
                        </Link>
                    </div>

                    <div className={"col text-center"} >
                        <Link to={"/games"}>
                            <img src={igri} className={"img-fluid mx-auto d-block"} alt={"igri"}/>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Categories;