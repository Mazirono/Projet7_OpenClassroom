import React from "react";



//scss
import "./scss/register-login.scss";
import "./scss/header.scss";
import "./scss/home.scss";

//components
import { Header} from "./components/header.jsx";


//pages
import {Register} from "./pages/register.jsx";
import {Login} from "./pages/login.jsx";
import {Accueil} from "./pages/home.jsx";
import {Profil} from "./pages/profil.jsx";

import { BrowserRouter, Switch, Route,Redirect} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLogginActive: true
    };
    
  }

  componentDidMount() {
    const isAuth = !!localStorage.getItem("token");
    if(isAuth === 3){
    this.rightSide.classList.add("right");
    }
  }

  changeState() {
    const { isLogginActive } = this.state;
    
      if (isLogginActive) {
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
      } else {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
      }
      
      this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
   
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Inscription" : "Connexion";
    const currentActive = isLogginActive ? "login" : "register";
   
    const isAuth = !!localStorage.getItem("token");
    console.log(isAuth)
    return (
    
      <BrowserRouter>
      {isAuth &&
        <Header />
      } 
        <Switch>
          
          <Route exact path="/">  
          
           {isAuth &&
            <Redirect to="/accueil" />
            } 
            <div className="App">
              <div className="login">
                <div className="container" ref={ref => (this.container = ref)}>
                  {isLogginActive && (
                    <Login containerRef={ref => (this.current = ref)} />
                  )}
                  {!isLogginActive && (
                    <Register containerRef={ref => (this.current = ref)} />
                  )}
                </div>
                <RightSide
                  current={current}
                  currentActive={currentActive}
                  containerRef={ref => (this.rightSide = ref)}
                  onClick={this.changeState.bind(this)}
                />
              </div>
            </div>
           
          </Route>
       
        
        <Route exact path="/accueil">  
        
        {!isAuth &&
        
            <Redirect to="/" />
           
          } 
          <Accueil />
      
            
        </Route>

        <Route exact path="/profil">  
        
          {!isAuth &&
          
              <Redirect to="/" />
            
          } 
          <Profil />
        </Route>

        </Switch>
        
      </BrowserRouter>
    
    );

  }

}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
