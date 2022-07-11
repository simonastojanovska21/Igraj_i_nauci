import React, {Component} from "react";
import {Link} from "react-router-dom";
import reset from "../../images/reset.png"
import back from "../../images/back.png";

class Hangman extends Component{

    constructor(props) {
        super(props);
        this.state = {
            lives : 6,
            answer : 'ДЕТЕ',
            currentImage : 0,
            guessed: '',
            letters : 'АБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ'
        }
    }

    resetGame() {
        this.setState({
            lives : 6,
            answer : 'ДЕТЕ',
            currentImage : 0,
            guessed: ''
        });
    }

    handleGuess=(e)=> {

        if(this.state.answer === this.guessedWord().join("")){
            window.location.href = "http://localhost:3000/success"
        }

        let ltr = e.target.value.trim()

        this.setState(st => ({
            guessed: st.guessed + ltr,
            lives: st.lives - (st.answer.includes(ltr) ? 0 : 1),
            currentImage : st.currentImage + (st.answer.includes(ltr) ? 0 : 1)
        }));
        console.log(this.guessedWord())


    }

    guessedWord() {
        // deconstructor
        const { answer, guessed } = this.state;

        return answer
            .split("")
            .map(ltr => (guessed.includes(ltr) ? ltr : "_"));
    }


    render() {
        return(
            <div className={"lightBackground pt-2 "}>
                <div className={"container"}>
                    <div className={"d-flex justify-content-center pb-2"}>
                        <Link className={"btn rounded-pill fw-bold text-white me-5"} style={{backgroundColor: '#1483E4'}} to={'/games'}>
                            <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                        </Link>

                        <button className={"btn rounded-pill fw-bold text-white "} onClick={()=>this.resetGame()} style={{backgroundColor: '#1483E4'}} >
                            <img className={"img-fluid"} style={{maxHeight:'20px'}} src={reset} alt={"reset icon"}/>  Повторно
                        </button>
                    </div>

                    <div className={"text-center pb-3"}>
                        <span className={"h4"}>Обиди се да го погодиш зборот </span> <br/>
                        <span className={"h5"}>Имаш уште {this.state.lives} обиди</span>
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        <img className={"img-fluid"} src={require(`../../images/hangman/Hangman${this.state.currentImage}.png`)} alt={"hangman status"} style={{maxHeight:'300px'}}/>
                    </div>

                    <div className={"row"}>
                        <div className={"col-sm-2"}/>

                        <div className={"col-sm-8 d-flex justify-content-center"}>
                            {this.state.answer.split("").map((term)=>{
                                return(
                                    <p className={"h1 me-2 fw-bolder"}>
                                        {this.state.guessed.includes(term) ? term : "_"}
                                    </p>
                                )
                            })}
                        </div>

                        <div className={"col-sm-2"}/>
                    </div>

                    <div className={"row"}>
                        <div className={"col-2"}/>

                        <div className={"col-8 d-flex "}>
                            <div className="d-grid gap-1 d-md-block justify-content-center">
                                {this.state.letters.split("").map((term)=>{
                                    return(
                                        <button className={"btn rounded-2 m-2 fw-bold"} style={{backgroundColor: '#1483E4'}}
                                                value={term}
                                                onClick={this.handleGuess}
                                                disabled={this.state.guessed.includes(term) || this.state.lives <=0}>
                                            {term}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={"col-2"}/>
                    </div>
                </div>
            </div>
        )
    }


}

export default Hangman;