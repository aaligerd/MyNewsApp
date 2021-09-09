import React, { Component } from 'react'
import NewsCards from './NewsCards'
import Spiner from './Spiner';

export class NewsComponent extends Component {
    constructor() {
        super();
        this.state = {
            articles:[],
            loading: true
        }
    }
    async componentDidMount() {
        // let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f4a0557f5441404ca4a8517d71dcdef7";
        let url = "https://v1.nocodeapi.com/subhro81/fbsdk/SctmboPpVnCpGpNn/firestore/allDocuments?collectionName=stories";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData,
            loading: false
        });
        // console.log(parsedData);
    }
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">My News App</h2>
                {this.state.loading && <Spiner />}
                <div className="row">
                    { this.state.articles.map((element) => {
                        let timeStamp=element._fieldsProto.timestamp.integerValue;
                        let title=element._fieldsProto.title.stringValue;
                        let description=element._fieldsProto.description.stringValue;
                        let imgurl=element._fieldsProto.imgurl.stringValue
                        let readmore=element._fieldsProto.mainstory.stringValue;
                        return <div className="col-lg-4 col-md-6 col-sm-12 my-4" key={timeStamp}>
                            <NewsCards title={title.length>80?title.slice(0,80): title} description={description.length>200?description.slice(0,250):description} imgUrl={imgurl} readmore={readmore} />
                        </div>
                    })}
                </div>


            </div>
        )
    }
}

export default NewsComponent
