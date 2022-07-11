import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import waterCirculationFillOut from "../../images/science/water_circulation_fill_out.png";

const WaterCirculationFillOut = (props)=>{
    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/science/waterCirculation'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pb-5 "}>

                <div className={"text-center pb-5"}>
                    <span className={"h3"}>Впиши го бројот кој одговара на терминиот во празното поле</span>
                </div>

                <div className={"d-flex justify-content-center"}>
                    <img src={waterCirculationFillOut} alt={"waterCirculationFillOut image"}
                         className={"img-fluid mx-auto d-block"} style={{maxHeight: '500px'}} />
                </div>

                <div className={"d-flex row justify-content-center mt-3"}>
                    <div className="input-group flex-nowrap col-sm-3" style={{maxWidth:'200px'}}>
                        <span className="input-group-text" id="addon-wrapping">Врнежи</span>
                        <input type="number" className="form-control"/>
                    </div>

                    <div className="input-group flex-nowrap col-sm-3" style={{maxWidth:'200px'}}>
                        <span className="input-group-text" id="addon-wrapping">Кондензација</span>
                        <input type="number" className="form-control"/>
                    </div>

                    <div className="input-group flex-nowrap col-sm-3" style={{maxWidth:'200px'}}>
                        <span className="input-group-text" id="addon-wrapping">Акумилација</span>
                        <input type="number" className="form-control"/>
                    </div>

                    <div className="input-group flex-nowrap col-sm-3" style={{maxWidth:'200px'}}>
                        <span className="input-group-text" id="addon-wrapping">Испарување</span>
                        <input type="number" className="form-control"/>
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto pt-5" >
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"}
                          style={{backgroundColor: '#1483E4'}} to={'/success'}>
                        Продолжи</Link>
                </div>

            </div>
        </div>
    )
}

export default WaterCirculationFillOut;