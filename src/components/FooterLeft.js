import React, { Component } from 'react'

export class footerLeft extends Component {
    render() {
        const footerLinkStyle={textDecoration:"none",color:"#fff",fontWeight:"600"}
        return (
            <>
                <div className="row">
                <h3 className="text-light my-3">NewsOcean</h3>
                <div className="col-1 d-flex justify-content-between">
                    <a href="/" style={footerLinkStyle}>Home</a>
                    <p className="text-light">|</p>
                </div>
                <div className="col-1 col-1 d-flex justify-content-between">
                    <a href="/" style={footerLinkStyle}>About</a>
                    <p className="text-light">|</p>
                </div>
                <div className="col-1 col-1 d-flex justify-content-between">
                    <a href="/" style={footerLinkStyle}>Contact</a>
                </div>
            </div>
            <div className="row">
                <div className="col-2 mt-2">
                    <p className="text-light">Location : </p>
                    <p className="text-light">3/111A Vidyasagar Colony,P.O - Naktala , Kolkata-700047</p>
                </div>
            </div>
            </>
        )
    }
}

export default footerLeft
