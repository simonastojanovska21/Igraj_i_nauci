import React from "react";
import {Link} from "react-router-dom";

const MacedonianSubcategory=(props)=>{
    return(
        <div className={"lightBackground pt-5 "}>
            <div className={"container-lg pt-5 pb-5 ps-5 w-50"}>
                <div className="d-grid gap-2 ">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Изброј ги гласовите од зборот</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Одбери ја буквата од интерес во зборот</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Научи ги буквите од А до Ш</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Обиди се да го напишеш зборот</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                        Решавај проблеми</Link>
                </div>
            </div>
        </div>
    )
}

export default MacedonianSubcategory;