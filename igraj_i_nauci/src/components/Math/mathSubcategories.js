import React from "react";
import {Link} from "react-router-dom";

const MathSubcategories=(props)=>{
    return(
        <div className={"lightBackground pt-5 "}>
            <div className={"container-lg pt-5 pb-5 ps-5 w-50"}>
                <div className="d-grid gap-2 ">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/learnDigits'}>
                        Научи ги цифрите од 0-9</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/'}>
                        Изброј ги елементите од множеството</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/'}>
                        Погоди ја формата на фигурата</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/math/'}>
                        Решавај задачи</Link>
                </div>
            </div>
        </div>
    )
}

export default MathSubcategories;