import React, {Component} from "react";
import Panel from "./Panel";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import reset from "../../images/reset.png";
class Snake extends Component{

    state = {
        score: 0,
        level:1
    }

    changeScore = (score)=>{
        this.setState({score:score})
        if(score % 10 === 0){
            this.setState({level:score/10+1})
            const {panel} = this
            const {level} = this.state
            if(1000-level*200 > 0){
                panel.init(1000-level*200)
            }
        }
    }

    startGame = ()=>{
        const {panel} = this
        panel.init(500)
    }

    render() {
        return (

            <div className={"lightBackground pt-2 "}>
                <div className={"container pb-5"}>
                    <div className={"d-flex justify-content-start pb-2"}>
                        <Link className={"btn rounded-pill fw-bold text-white me-5"} style={{backgroundColor: '#1483E4'}} to={'/games'}>
                            <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                        </Link>
                    </div>

                    <div className="App">
                        <Panel changeScore={this.changeScore} ref = {c => this.panel = c}/>
                    </div>
                </div>
            </div>

        )
    }


    componentDidMount() {
        this.startGame();
    }
}

export default Snake;