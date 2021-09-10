import React, { Component } from 'react'

export class NewsCards extends Component {

    render() {
        let noImgLink = "https://user-images.githubusercontent.com/2279051/36819127-dc9e33ea-1c9c-11e8-9a93-0d3c0a674f02.png";
        let { title, description, imgUrl, readmore, mode } = this.props;
        let imgStyle = {
            width: "100%",
            height: "200px",
            borderRadius: "10px 10px 0 0"
        }
        return (
            <div>
                <div className="card"  style={{ width: "100%", border: `0.3px ${mode === "light" ? "black" : "white"} solid`, borderRadius: "10px 10px 10px 10px",backgroundColor:mode==="light"? "#eff3fb":"#495776"}}>
                    <img src={imgUrl ? imgUrl : noImgLink} className="card-img-top" alt="Content-Image" style={imgStyle} />
                    <div className="card-body">
                        <h5 className={`card-title text-${mode === "dark" ? "light" : "dark"}`}><strong>{title}</strong>.</h5>
                        <p className={`card-text text-${mode === "dark" ? "light" : "dark"}`}>{description}</p>
                        <a target="_blank" rel="noreferrer" href={readmore} className={`btn btn-${mode==="light"?"dark":"light"}`}>Read More</a>
                    </div>
                </div>


            </div>
        )
    }
}

export default NewsCards
