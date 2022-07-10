import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import car from "../../images/science/car icon.png";
import dolphin from "../../images/games/2.png";
import jellyfish from "../../images/games/4.png";
import seaHorse from "../../images/games/7.png";
import crab from "../../images/games/1.png";
import fish from "../../images/games/3.png"


const SelectOutlier=(props)=>{
    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>
            <div className={"container pb-5 ps-5 w-75 app"}>

                <div className={"text-center pb-3"}>
                    <span className={"h1"}>Одбери го натрапникот во множеството</span>
                </div>

                <div className={"justify-content-center mt-2 outlier"}>
                    <div className={"outlier-row mt-3"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"element img-fluid border border-dark me-2"} src={dolphin} alt={"letterT icon"}/>
                        </Link>

                        <Link  to={'/tryAgain'}>
                            <img className={"element img-fluid  border border-dark me-2"} src={jellyfish} alt={"letterS icon"}/>
                        </Link>

                        <Link  to={'/tryAgain'}>
                            <img className={" element img-fluid border border-dark"} src={crab} alt={"letterV icon"}/>
                        </Link>
                    </div>

                    <div className={"outlier-row mt-3"}>
                        <Link  to={'/tryAgain'}>
                            <img className={"element img-fluid border border-dark me-2"} src={fish} alt={"letterT icon"}/>
                        </Link>

                        <Link  to={'/tryAgain'}>
                            <img className={"element img-fluid  border border-dark me-2"} src={seaHorse} alt={"letterS icon"}/>
                        </Link>

                        <Link  to={'/success'}>
                            <img className={"element img-fluid border border-dark"} src={car} alt={"letterV icon"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectOutlier;