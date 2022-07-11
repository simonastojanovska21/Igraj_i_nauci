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
import Memory from "../Games/memory";
import CountLetters from "../Macedonian/countLetters";
import SelectLetter from "../Macedonian/selectLetter";
import LearnLetter from "../Macedonian/learnLetter";
import WriteLetterAlone from "../Macedonian/writeLetterAlone";
import MacedonianTask from "../Macedonian/macedonianTask";
import SelectOutlier from "../Science/selectOutlier";
import Snake from "../Games/snake";
import WaterCirculation from "../Science/waterCirculation";
import HumanBody from "../Science/humanBody";
import ScienceTask from "../Science/scienceTask";
import WaterCirculationFillOut from "../Science/waterCirculationFillOut";
import Success from "../Home/success";
import TryAgain from "../Home/tryAgain";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        digit : '',
        lastLocation :'/'
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
                  <Route path={"/success"} element={<Success />} />
                  <Route path={"/tryAgain"} element={<TryAgain location={this.state.lastLocation}/>} />

                  <Route path={"/math/writeDigitAlone"} element={<WriteDigitAlone digit = {this.state.digit}/>}/>
                  <Route path={"/math/learnDigits"} element={<LearnDigits onGenerateDigit = {this.saveGeneratedDigit} />}/>
                  <Route path={"/math/countElements"} element={<CountElements onTryAgain={this.saveLocation} />} />
                  <Route path={"/math/guessForm"} element={<GuessForm onTryAgain={this.saveLocation} />} />
                  <Route path={"/math/mathTasks"} element={<MathTasks onTryAgain={this.saveLocation}/>} />
                  <Route path={"/math"} element={<MathSubcategories/>}/>

                  <Route path={"/macedonian/macedonianTasks"} element={<MacedonianTask onTryAgain={this.saveLocation} />} />
                  <Route path={"/macedonian/writeLetterAlone"} element={<WriteLetterAlone />} />
                  <Route path={"/macedonian/learnLetter"} element={<LearnLetter />} />
                  <Route path={"/macedonian/selectLetter"} element={<SelectLetter onTryAgain={this.saveLocation} />} />
                  <Route path={"/macedonian/countLetters"} element={<CountLetters onTryAgain={this.saveLocation} />} />
                  <Route path={"/macedonian"} element={<MacedonianSubcategory/>}/>

                  <Route path={"/science/scienceTask"} element={<ScienceTask onTryAgain={this.saveLocation}  />} />
                  <Route path={"/science/humanBody"} element={<HumanBody />} />
                  <Route path={"/science/waterCirculation"} element={<WaterCirculation />} />
                  <Route path={"/science/waterCirculationFillOut"} element={<WaterCirculationFillOut />} />
                  <Route path={"/science/selectOutlier"} element={<SelectOutlier onTryAgain={this.saveLocation} />} />
                  <Route path={"/science"} element={<ScienceSubcategory/>}/>

                  <Route path={"/games/hangman"} element={<Hangman/>} />
                  <Route path={"/games/TicTacToi"} element={<TicTacToi/>} />
                  <Route path={"/games/memory"} element={<Memory />} />
                  <Route path={"/games/snake"} element={<Snake />} />
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

    saveLocation = (lastLocation)=>{
      this.setState({lastLocation : lastLocation})
    }
}

export default App