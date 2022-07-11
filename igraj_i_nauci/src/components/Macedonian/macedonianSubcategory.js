import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";

const MacedonianSubcategory=(props)=>{
    return(
        <div className={"lightBackground pt-3"}>

            <div className={"container d-flex justify-content-start"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pt-5 pb-5 "}>
                <div className="d-grid gap-2 col-8 mx-auto">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian/countLetters'}>
                        Изброј ги гласовите од зборот</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian/selectLetter'}>
                        Одбери ја буквата од интерес во зборот</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian/learnLetter'}>
                        Научи ги буквите од А до Ш</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/macedonian/macedonianTasks'}>
                        Решавај проблеми</Link>
                </div>
            </div>
        </div>
    )
}

export default MacedonianSubcategory;