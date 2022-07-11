import React, {Component} from "react";
import MemoryCards from "./MemoryCards";
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import Card from "./Card";
import reset from "../../images/reset.png";

class Memory extends Component{

    state = {};

    constructor(props) {
        super(props);
        this.onCardClicked = this.onCardClicked.bind(this);
        this.onPlayAgain = this.onPlayAgain.bind(this);
        this.memoryCards = new MemoryCards();
    }

    componentDidMount() {
        this.initGame();
    }

    initGame() {
        this.memoryCards.generateCardSet();
        this.setState({
            turnNo: 1,
            pairsFound: 0,
            numClicksWithinTurn: 0,
            firstId: undefined,
            secondId: undefined
        });
    }

    clearCards(id1, id2) {
        if (this.state.numClicksWithinTurn !== 2) {
            return;
        }
        this.memoryCards.flipCard(this.state.firstId, false);
        this.memoryCards.flipCard(this.state.secondId, false);
        this.setState({
            firstId: undefined,
            secondId: undefined,
            numClicksWithinTurn: 0,
            turnNo: this.state.turnNo + 1
        });
    }

    onCardClicked(id, image) {
        if (this.state.numClicksWithinTurn === 0 || this.state.numClicksWithinTurn === 2) {
            if (this.state.numClicksWithinTurn === 2) {
                clearTimeout(this.timeout);
                this.clearCards(this.state.firstId, this.state.secondId);
            }
            this.memoryCards.flipCard(id, true);
            this.setState({
                firstId: id,
                numClicksWithinTurn: 1
            });
        } else if (this.state.numClicksWithinTurn === 1) {
            this.memoryCards.flipCard(id, true);
            this.setState({
                secondId: id,
                numClicksWithinTurn: 2
            });

            if (this.memoryCards.cardsHaveIdenticalImages(id, this.state.firstId)) {
                this.memoryCards.setCardAsMatched(this.state.firstId, true);
                this.memoryCards.setCardAsMatched(id, true);
                this.setState({
                    pairsFound: this.state.pairsFound + 1,
                    firstId: undefined,
                    secondId: undefined,
                    turnNo: this.state.turnNo + 1,
                    numClicksWithinTurn: 0
                });

            } else {
                this.timeout = setTimeout(() => {
                    this.clearCards(this.state.firstId, this.state.secondId);
                }, 1500);
            }

        }
    }

    onPlayAgain() {
        this.initGame();
    }

    render() {

        if (this.state.pairsFound === this.memoryCards.NUM_IMAGES) {
            this.timeout = setTimeout(()=>{
                window.location.href = 'http://localhost:3000/success'
            },1000);
        }

        return(
            <div className={"lightBackground pt-2 "}>
                <div className={"container d-flex justify-content-start pb-2"}>
                    <Link className={"btn btn-md rounded-pill fw-bold text-white me-5"} style={{backgroundColor: '#1483E4'}} to={'/games'}>
                        <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                    </Link>

                </div>

                <div className={"container pb-5 app"}>

                    <div className="memory">

                        <div className={"memory-row"}>
                            {this.memoryCards.cards.slice(0,4).map((c)=>{
                                return(
                                    <Card key={c.id}
                                          id={c.id}
                                          image={c.image}
                                          imageUp={c.imageUp}
                                          matched={c.matched}
                                          onClick={this.onCardClicked} />
                                )
                            })}
                        </div>

                        <div className={"memory-row"}>
                            {this.memoryCards.cards.slice(4,8).map((c)=>{
                                return(
                                    <Card key={c.id}
                                          id={c.id}
                                          image={c.image}
                                          imageUp={c.imageUp}
                                          matched={c.matched}
                                          onClick={this.onCardClicked} />
                                )
                            })}
                        </div>

                        <div className={"memory-row"}>
                            {this.memoryCards.cards.slice(8,12).map((c)=>{
                                return(
                                    <Card key={c.id}
                                          id={c.id}
                                          image={c.image}
                                          imageUp={c.imageUp}
                                          matched={c.matched}
                                          onClick={this.onCardClicked} />
                                )
                            })}
                        </div>

                        <div className={"memory-row"}>
                            {this.memoryCards.cards.slice(12,16).map((c)=>{
                                return(
                                    <Card key={c.id}
                                          id={c.id}
                                          image={c.image}
                                          imageUp={c.imageUp}
                                          matched={c.matched}
                                          onClick={this.onCardClicked} />
                                )
                            })}
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Memory;