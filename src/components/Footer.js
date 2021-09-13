import React from 'react'
import facebooklogo from './images/facebook.png'
import instalogo from './images/instagram.png'
import twitterlogo from './images/twitter.png'
import whatsapplogo from './images/whatsapp.png'
import youtubelogo from './images/youtube.png'

function Footer() {
    const footerLinkStyle1 = { textDecoration: "none", color: "#fff", fontWeight: "600" }
    const footerLinkStyle2 = { textDecoration: "none", color: "#fff", fontWeight: "600",padding:"4px" }
    const txtareaStyle = { height: "40px", resize: "none", backgroundColor: "#232936", color: 'white', border: "1px grey solid", borderRadius: "3px", width: "100%" }
    const socialImgs={height:"32px",margin:"15px"}
    return (
        <footer>
            <div>
                <div className="container-fluid bg-dark">
                    <div className="container">
                        <div className="row">
                            <h3 className="text-light my-3" style={{fontWeight:"bold",letterSpacing:"2px"}}>NewsOcean</h3>
                            <div className="col-2 d-flex justify-content-between">
                                <a href="/" style={footerLinkStyle1}>Home</a>
                                <p className="text-light">|</p>
                                <a href="/" style={footerLinkStyle1}>About</a>
                                <p className="text-light">|</p>
                                <a href="/" style={footerLinkStyle1}>Contact</a>
                            </div>
                            <div className="col-1 offset-3">
                                <p className="text-light"><text style={{fontSize:"19px",fontWeight:"600"}}>Catagory</text></p>
                            </div>
                            <div className="col-2 offset-3">
                                <textarea placeholder=" email" style={txtareaStyle}></textarea>
                                
                            </div>
                            <div className="col-1 text-end">
                                <button className="btn btn-light">Newsletter</button>
                            </div>
                            


                        </div>
                        <div className="row">
                            <div className="col-3 mt-2">
                                <p className="text-light" style={{position:"relative",top:"50%" }}>Location : </p>
                                {/* <p className="text-light">3/111A Vidyasagar Colony,P.O - Naktala, Westbengal, Kolkata-700047</p> */}
                            </div>
                            
                            <div className="col-5 d-flex justify-content-center text-center">
                                <a href="/" style={footerLinkStyle2}>Politics</a>
                                <p className="text-light" style={footerLinkStyle2}>|</p>
                                <a href="/" style={footerLinkStyle2} >Sports</a>
                                <p className="text-light" style={footerLinkStyle2}>|</p>
                                <a href="/" style={footerLinkStyle2}>Goships</a>
                                <p className="text-light" style={footerLinkStyle2}>|</p>
                                <a href="/" style={footerLinkStyle2}>International</a>
                                <p className="text-light" style={footerLinkStyle2}>|</p>
                                <a href="/" style={footerLinkStyle2}>Science </a>    
                                
                                
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-3 mt-2">
                                
                                <p className="text-light">3/111A Vidyasagar Colony,P.O - Naktala, Westbengal, Kolkata-700047</p>
                            </div>
                            
                            <div className="col-5 text-center mt-2">
                             <a href="/"><img src={facebooklogo} alt="" style={socialImgs} /></a>    
                             <a href="/"><img src={instalogo} alt="" style={socialImgs} /></a>
                             <a href="/"><img src={twitterlogo} alt="" style={socialImgs} /></a>
                             <a href="/"><img src={whatsapplogo} alt="" style={socialImgs} /></a>
                             <a href="/"><img src={youtubelogo} alt="" style={socialImgs} /></a>
                            </div>
                            <div className="col-4 text-end">
                                <p style={{ textDecoration: "none", color: "#fff", fontWeight: "600",position:"relative",top:"50%" }}>©2022 aaligerd</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
