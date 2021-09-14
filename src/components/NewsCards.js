import React, { Component } from 'react'

export class NewsCards extends Component {

    render() {
        let noImgLink = "https://user-images.githubusercontent.com/2279051/36819127-dc9e33ea-1c9c-11e8-9a93-0d3c0a674f02.png";
        let { title, description, imgUrl, readmore, mode,source,pubtime,author } = this.props;
        let imgStyle = {
            width: "100%",
            height: "200px"
            
        }
        return (
            
            <div>
                <div className="card" style={{border: `0.3px ${mode === "light" ? "black" : "white"} solid`}}>
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'20%'}}>{source}</span>
                    <img src={imgUrl ? imgUrl : noImgLink} className="card-img-top" alt="  NoContentImage" style={imgStyle} />
                    <div className="card-body">
                        <h5 className={`card-title text-${mode === "dark" ? "light" : "dark"}`}><strong>{title}</strong></h5>
                        <p className={`card-text text-${mode === "dark" ? "light" : "dark"}`}>{description} </p>
                        <div className="card-footer">By <b className="text-danger">{author?author:"Unknown"}</b>  on <text className="text-danger" style={{fontWeight:'600'}}>{pubtime}</text></div>
                        <a target="_blank" rel="noreferrer" href={readmore} className={`btn btn-${mode === "light" ? "dark" : "light"} my-2`}>Read More</a>
                    </div>
                </div>


            </div>
        )
    }
}

export default NewsCards
