import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom";
import back from "../../images/back.png";
import reset from "../../images/reset.png";

const TicTacToi=(props)=>{

    const [turn,setTurn]=useState('X')
    const [cells,setCells]=useState(Array(9).fill(''))
    const [winner,setWinner]=useState()

    const CheckWinner=(squares)=>{
        let combos={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal:[
                [0,4,8],
                [2,4,6]
            ]
        }

        for(let combo in combos){
            combos[combo].forEach((pattern)=>{
                if(
                    squares[pattern[0]]==="" ||
                    squares[pattern[1]]==="" ||
                    squares[pattern[2]]===""
                ){

                }
                else if(squares[pattern[0]]===squares[pattern[1]] &&
                    squares[pattern[1]]===squares[pattern[2]])
                {
                    setWinner(squares[pattern[0]])
                }
            })
        }
    }

    const handleClick=(num)=>{
        if(cells[num]!==""){
            return
        }
        let squares=[...cells]
        if(turn==="X"){
            squares[num]="X"
            setTurn("O")
        }
        else{
            squares[num]="O"
            setTurn("X")
        }
        CheckWinner(squares)
        setCells(squares)
    };

//style={{height:'100px'}}
    const Cell=({num})=>{
        return <button
            type="button"
            onClick={()=>handleClick(num)}
            disabled={winner}
            className={`gameButton square ${cells[num] === 'X' ? 'text-green' : 'text-orange'}`}>
            {cells[num]}
        </button>
    };

    const handleRestart=()=>{
        setWinner(null)
        setCells(Array(9).fill(''))
    }
    const noMoves = cells.every(el => el !== '');

    return(
        <div className={"lightBackground pt-2 "}>
            <div className={"container d-flex justify-content-start pb-2"}>
                <Link className={"btn btn-md rounded-pill fw-bold text-white"} style={{backgroundColor: '#1483E4'}} to={'/games'}>
                    <img className={"img-fluid"} style={{maxHeight:'20px'}} src={back} alt={"back icon"}/>  Назад
                </Link>
            </div>

            <div className={"container pb-5 ps-5 app"}>

                <div className={"text-center pb-5"}>
                    {!winner && !noMoves && (
                        <>
                            <span className={"h3"}>Следен чекор: {turn}</span>
                        </>
                    )}
                </div>

                <div className="board">
                    <div className="board-row">
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </div>

                    <div className="board-row">
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </div>

                    <div className="board-row">
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </div>
                </div>



                {winner && (
                    <>
                        <h3 className='winner pb-3'>{winner} е победник!</h3>
                        <button className={"btn btn-lg rounded-pill fw-bold text-white me-5"} style={{backgroundColor: '#304D63'}}onClick={()=>handleRestart()} >
                            <img className={"img-fluid"} style={{maxHeight:'20px'}} src={reset} alt={"reset icon"}/>  Повторно
                        </button>

                    </>
                )}
                {!winner && noMoves && (
                    <>
                        <h3 className='winner'>Нерешено!</h3>
                        <button className={"btn btn-lg rounded-pill fw-bold text-white me-5"} style={{backgroundColor: '#304D63'}}onClick={()=>handleRestart()} >
                            <img className={"img-fluid"} style={{maxHeight:'20px'}} src={reset} alt={"reset icon"}/>  Повторно
                        </button>
                    </>
                )}
           </div>

        </div>
    )
}

export default TicTacToi;