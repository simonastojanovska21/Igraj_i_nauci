import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";


const MathSubcategories=(props)=>{
    return(

        <div className={"lightBackground pt-3 "}>

            <div className={"container d-flex justify-content-start"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pt-5 pb-5"}>
                <div className="d-grid gap-2 col-8 mx-auto ">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/learnDigits'}>
                        Научи ги цифрите од 0-9</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/countElements'}>
                        Изброј ги елементите од множеството</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/guessForm'}>
                        Погоди ја формата на фигурата</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/mathTasks'}>
                        Решавај задачи</Link>
                </div>
            </div>
        </div>


    )
}

export default MathSubcategories;