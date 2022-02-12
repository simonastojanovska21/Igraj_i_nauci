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

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
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

                  <Route path={"/math/learnDigits"} element={<LearnDigits/>}/>
                  <Route path={"/math"} element={<MathSubcategories/>}/>

                  <Route path={"/macedonian"} element={<MacedonianSubcategory/>}/>

                  <Route path={"/science"} element={<ScienceSubcategory/>}/>

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
}

export default App