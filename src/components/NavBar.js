import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {


    render() {        
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="top-nav">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{fontWeight:'600',fontSize:'25px'}}>NewsApplet</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <ul className="navbar-nav" style={{fontSize:'18px'}}>
                                <li className="nav-item"><Link to="/" className="nav-link">General</Link></li>
                                <li className="nav-item"><Link to="/business" className="nav-link">Business</Link></li>
                                <li className="nav-item"><Link to="/entertainment" className="nav-link">Entertainment</Link></li>
                                <li className="nav-item"><Link to="/health" className="nav-link">Health</Link></li>
                                <li className="nav-item"><Link to="/science" className="nav-link">Science</Link></li>
                                <li className="nav-item"><Link to="/sports" className="nav-link">Sports</Link></li>
                                <li className="nav-item"><Link to="/technology" className="nav-link">Technology</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="d-flex">
                                <ul className="navbar-nav" style={{fontSize:'18px'}}>
                                <li className="nav-item">
                                        <Link to="/contact" className="nav-link">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>


            </div>
        )
    }
}

export default NavBar
