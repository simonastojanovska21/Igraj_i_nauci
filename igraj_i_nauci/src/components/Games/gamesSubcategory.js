import React from "react";
import {Link} from "react-router-dom";
import back from "../../images/back.png";

const GamesSubcategory=(props)=>{
    return(
        <div className={"lightBackground pt-3"}>

            <div className={"container d-flex justify-content-start"}>
                <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/categories'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container-lg pt-5 pb-5 ps-5 w-50"}>
                <div className="d-grid gap-2 ">
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/games/hangman'}>
                        Играј бесилка</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/games/TicTacToi'}>
                        Играј Х - О</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/games/memory'}>
                        Играј игра на меморија</Link>
                    <Link className={"btn btn-lg rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/games/snake'}>
                        Играј snake</Link>
                </div>
            </div>
        </div>
    )
}

export default GamesSubcategory;