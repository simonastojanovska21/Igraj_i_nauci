import React from "react";
import homepageImage from "../../images/homepage_image.png"
import uciVoSekoeVreme from "../../images/uci_vo_sekoe_vreme.png"
import zabavuvajSe from "../../images/zabavuvaj se.png"
import {Link} from "react-router-dom";

const Home=(props)=>{
    return(
        <div className={"lightBackground pt-5 "}>
            <div className={"container-lg pt-5 pb-5 ps-5"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <span className={"h1"}>Добредојде!</span>
                        <br/>
                        <div className={"pt-3 pb-5"}>
                            <span>
                                Играј и научи е апликација која ти овозможува да научиш многу нови работи на брз, лесен
                                и интересен начин. Секако во секое време ќе можеш да се одмориш и да играш некоја од
                                најпопуларните игри.
                            </span>
                        </div>

                        <div className="d-grid gap-2 col-6">
                            <Link className={"btn btn-lg rounded-pill"} style={{backgroundColor: '#F79F77'}} to={'/categories'}>
                                Започни</Link>
                        </div>
                    </div>
                    <div className={"col justify-content-center"}>
                        <div>
                            <img src={homepageImage} className={"img-fluid mx-auto d-block"} alt={"boy and girl learning"}/>
                        </div>
                    </div>
                </div>
            </div>

            {/*style={{backgroundColor: '#1483E4'}}*/}
            <div className={"lightBackground mt-5"} style={{backgroundColor: '#1483E4'}} >
                <div className={"container-lg pt-5 pb-5 ps-5"}>
                    <div className={"row "}>
                        <div className={"col pt-5 justify-content-center text-center"} >
                            <img src={uciVoSekoeVreme} className={"img-fluid mx-auto d-block"} alt={"education light bulb"}/>
                            <span className={"h1"}>Учи во секое време!</span>
                        </div>
                        <div className={"col pt-5 justify-content-center text-center"} >
                            <img src={zabavuvajSe} className={"img-fluid mx-auto d-block"} alt={"games"}/>
                            <span className={"h1 text-center"}>Забавувај се кога ќе посакаш</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home;