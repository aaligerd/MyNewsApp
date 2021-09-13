import React, { Component } from 'react'
import NewsCards from './NewsCards'
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class NewsComponent extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general"
    }
    static proTtypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }
        document.title=this.capitalize(this.props.category)+"- NewsApplet";
    }
    updatePage = async () => {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(80);
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults
        });
        this.props.setProgress(100);

    }
    async componentDidMount() {
        this.updatePage();
    }
    fetchMoreData=async()=>{
        this.setState({page:this.state.page + 1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:this.state.articles.concat(parsedData.articles)});
        this.setState({ loading: false});
    }
    capitalize(str){
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
    render() {
        let { mode } = this.props;
        return (
            <>
                <h2 className={`text-center text-${mode === "dark" ? "light" : "dark"} my-5`}><strong>NewsApplet - {this.capitalize(this.props.category)}</strong></h2>
                {this.state.loading && <Spiner />}
                <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length!==this.state.totalResults}
                        loader={<Spiner/>}
                    >
                        <div className="container">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-lg-4 col-md-6 col-sm-12 my-4" key={element.url}>
                            <NewsCards author={element.author} pubtime={new Date(element.publishedAt).toUTCString()} source={element.source.name} mode={mode} title={element.title.length > 80 ? element.title.slice(0, 80) : element.title} description={element.description ? element.description.length > 200 ? element.description.slice(0, 250) : element.description : "Go main website to read news"} imgUrl={element.urlToImage} readmore={element.url} />
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>                
            </>
        )
    }
}

export default NewsComponent;


        //other APIs(firestore)
        //stories
        //let url = "https://v1.nocodeapi.com/subhro81/fbsdk/SctmboPpVnCpGpNn/firestore/allDocuments?collectionName=stories";
        //trendings
        //let url= "https://v1.nocodeapi.com/subhro81/fbsdk/SctmboPpVnCpGpNn/firestore/allDocuments?collectionName=trending"
        //firebase API Calls
        // { this.state.articless.map((element) => {
        //              let timeStamp=element._fieldsProto.timestamp.integerValue;
        //               let title=element._fieldsProto.title.stringValue;
        //               let description=element._fieldsProto.description.stringValue;
        //               let imgurl=element._fieldsProto.imgurl.stringValue
        //               let readmore=element._fieldsProto.mainstory.stringValue;
        //               return <div className="col-lg-4 col-md-6 col-sm-12 my-4" key={timeStamp}>
        //                   <NewsCards mode={mode} title={title.length>80?title.slice(0,80): title} description={description.length>200?description.slice(0,250):description} imgUrl={imgurl} readmore={readmore} />
        //               </div>
        //           })} 
