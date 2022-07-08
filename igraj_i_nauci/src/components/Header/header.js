import React from "react";
import logo from "../../images/logo.png"
import home from "../../images/home.png"
import {Link} from "react-router-dom";

const Header=(props)=>{
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-light redBackground">
                <div className={"container"}>
                    <a className="navbar-brand" href="/">
                        <img src={home} className={"logos pe-3"} alt={"logo"}/>
                        <span className={"title align-middle"}>Играј и научи</span>
                    </a>

                    {/*<Link className={""} to={"/"}>*/}
                    {/*    <img className={"img-fluid"} src={home} alt={"home icon"} style={{maxHeight:'80px'}}/>*/}
                    {/*</Link>*/}
                </div>
            </nav>
        </header>
    )
}

export default Header;