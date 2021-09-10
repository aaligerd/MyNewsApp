import './App.css';
import NavBar from './components/NavBar';

import React, { Component, memo } from 'react'
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
  
  constructor(){
    super();
    this.state={
      mode:"light"
    };
  }
  toogleMode=()=>{
    if(this.state.mode==="light"){
      this.setState({
        mode:"dark"
      });
    }else{
      this.setState({
        mode:"light"
      });
    }
    
  }

  render() {
    let bgbackgroundDark={      
      backgroundColor:"#242a38"
    }
    let bgbackgroundLight={
      backgroundColor:"#f6f6f6"
    }
    
    return (
      <div style={this.state.mode==="light"?bgbackgroundLight:bgbackgroundDark}>
          <NavBar mode={this.state.mode} toogleFunc={this.toogleMode}/>
          <NewsComponent mode={this.state.mode} />
      </div>
    )
  }
}

