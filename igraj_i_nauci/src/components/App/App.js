import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "../Header/header";
import Home from "../Home/home"
import Categories from "../Categories/categories";
import Footer from "../Footer/footer";
import MathSubcategories from "../Math/mathSubcategories";
import MacedonianSubcategory from "../Macedonian/macedonianSubcategory";
import ScienceSubcategory from "../Science/scienceSubcategory";
import GamesSubcategory from "../Games/gamesSubcategory";
import LearnDigits from "../Math/learnDigits";
import WriteDigitAlone from "../Math/writeDigitAlone";
import CountElements from "../Math/countElements";
import Hangman from "../Games/hangman";
import GuessForm from "../Math/guessForm";
import MathTasks from "../Math/mathTasks";
import TicTacToi from "../Games/TicTacToi";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        digit : ''
    }
  }


  render() {
    return(
        <Router>
          <Header/>
          <main>
            <div>
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/categories"} element={<Categories/>}/>

                  <Route path={"/math/writeDigitAlone"} element={<WriteDigitAlone digit = {this.state.digit}/>}/>
                  <Route path={"/math/learnDigits"} element={<LearnDigits onGenerateDigit = {this.saveGeneratedDigit} />}/>
                  <Route path={"/math/countElements"} element={<CountElements/>} />
                  <Route path={"/math/guessForm"} element={<GuessForm/>} />
                  <Route path={"/math/mathTasks"} element={<MathTasks/>} />
                  <Route path={"/math"} element={<MathSubcategories/>}/>

                  <Route path={"/macedonian"} element={<MacedonianSubcategory/>}/>

                  <Route path={"/science"} element={<ScienceSubcategory/>}/>

                  <Route path={"/games/hangman"} element={<Hangman/>} />
                  <Route path={"/games/TicTacToi"} element={<TicTacToi/>} />
                  <Route path={"/games"} element={<GamesSubcategory/>}/>
              </Routes>
            </div>
          </main>
          <Footer/>
        </Router>
    )
  }

    componentDidMount(){

    }
    saveGeneratedDigit = (digit)=>{
        this.setState({digit:digit})
    }
}

export default App