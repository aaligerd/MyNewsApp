import React, { Component } from 'react'

export class NewsCards extends Component {
    
    render() {
        let noImgLink="https://user-images.githubusercontent.com/2279051/36819127-dc9e33ea-1c9c-11e8-9a93-0d3c0a674f02.png";
        let {title,description,imgUrl,readmore}=this.props;
        return (
            <div>
                <div className="card" style={{ width: "100%"}}>
                    <img src={imgUrl?imgUrl:noImgLink} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{title}</strong>.</h5>
                        <p className="card-text">{description}</p>
                        <a target="_blank" rel="noreferrer" href={readmore} className="btn btn-primary">Read More</a>
                    </div>
                </div>


            </div>
        )
    }
}

export default NewsCards
