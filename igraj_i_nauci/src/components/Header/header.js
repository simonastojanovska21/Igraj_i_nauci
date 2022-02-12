import React from "react";
import logo from "../../images/logo.png"

const Header=(props)=>{
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-light redBackground">
                <div className={"container"}>
                    <a className="navbar-brand" href="/">
                        <img src={logo} className={"logos"} alt={"logo"}/>
                        <span className={"title align-middle"}>Играј и научи</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;