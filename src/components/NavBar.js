import React, { Component } from 'react'

export class NavBar extends Component {
    

    render() {
        
        let { mode,toogleFunc} = this.props;
        let navStyleLight={
            backgroundColor:"#dadada",
            
        }
        let navStyleDark={
            backgroundColor:"#2d4568",
            
        }
        
        
        

        return (
            <div>
                {/* <nav className={`navbar navbar-expand-lg navbar-${mode === "dark" ? "dark" : "light"} bg-${mode === "dark" ? "dark" : "light"}`}> */}
                <nav className="navbar navbar-expand-lg" style={mode==="dark"?navStyleDark:navStyleLight}>
                
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{fontSize:"22px",color:mode=="light"?"#2a2a2a":"#dadada"}}><strong>NewsOcean</strong></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="/" style={{fontWeight:"600",color:mode=="light"?"#2a2a2a":"#dadada"}}>Home</a>
                                <a className="nav-link active" aria-current="page" href="/about" style={{fontWeight:"600",color:mode=="light"?"#2a2a2a":"#dadada"}}>About</a>
                                <a className="nav-link active" aria-current="page" href="/contact" style={{fontWeight:"600",color:mode=="light"?"#2a2a2a":"#dadada"}}>Contact</a>
                                <a className="nav-link active" aria-current="page" href="/topnews" style={{fontWeight:"600",color:mode=="light"?"#2a2a2a":"#dadada"}}>Top News</a>
                                
                            </div>
                        </div>
                        
                    </div>
                </nav>
                <div className="form-check form-switch" >
                    <div className="row">
                        <div className="d-flex justify-content-end">
                            <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" onClick={toogleFunc} />
                            <span style={{width:"12px"}}></span>
                            <label htmlFor="flexSwitchCheckDefault" className={`text-${mode === 'light' ? 'dark' : 'light'}`}>{mode === 'light' ? 'Dark' : 'Light'} Mode</label>
                        </div>
                        
                    </div>
                            
                </div>

            </div>
        )
    }
}

export default NavBar
