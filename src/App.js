import './App.css';
import NavBar from './components/NavBar';
import React,{Component} from 'react'
import NewsComponent from './components/NewsComponent';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';

export default class App extends Component {
  apikey=process.env.REACT_APP_API_KEY_NEWS_APP;

  constructor() {
    super();
    this.state = {
      mode: "light"
    };
  }
  toogleMode = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark"
      });
    } else {
      this.setState({
        mode: "light"
      });
    }

  }
  state={
      progress:0
    }
    setProgress=(progs)=>{
      this.setState({
        progress:progs
      })
    }

  render() {
    let bgbackgroundDark = {
      backgroundColor: "#000",

    }
    let bgbackgroundLight = {
      backgroundColor: "#fff",

    }
    

    return (
      <>
        <Router>
        <div style={this.state.mode === "light" ? bgbackgroundLight : bgbackgroundDark}>
        <LoadingBar color='#f11946' progress={this.state.progress} height={2.5}/>
          <NavBar mode={this.state.mode} toogleFunc={this.toogleMode} />
          <Switch>
          <Route exact path="/contact" key="contact"><Contact/></Route>
          <Route exact path="/about" key="about"><About/></Route>
          
          <Route exact path="/" key="general"><NewsComponent setProgress={this.setProgress} apikey={this.apikey} mode={this.state.mode} pageSize={12} country={"in"} category={"general"} /></Route>
          <Route exact path="/business" key="business"><NewsComponent setProgress={this.setProgress} apikey={this.apikey} mode={this.state.mode} pageSize={12} country={"in"} category={"business"} /></Route>
          <Route exact path="/entertainment" key="entertainment"><NewsComponent setProgress={this.setProgress} apikey={this.apikey} mode={this.state.mode} pageSize={12} country={"in"} category={"entertainment"} /></Route>
          <Route exact path="/health" key="health"><NewsComponent setProgress={this.setProgress} apikey={this.apikey} mode={this.state.mode} pageSize={12} country={"in"} category={"health"} /></Route>
          <Route exact path="/science" key="science"><NewsComponent setProgress={this.setProgress} apikey={this.apikey} mode={this.state.mode} pageSize={12} country={"in"} category={"science"} /></Route>
          <Route exact path="/sports" key="sports"><NewsComponent setProgress={this.setProgress} apikey={this.apikey} mode={this.state.mode} pageSize={12} country={"in"} category={"sports"} /></Route>
          <Route exact path="/technology" key="technology"><NewsComponent setProgress={this.setProgress} apikey={this.apikey} mode={this.state.mode} pageSize={12} country={"in"} category={"technology"} /></Route>
          </Switch>
          
        </div>
        </Router>
      </>

    )

  }
}

