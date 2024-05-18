import React, { Component } from 'react'
import NewsItems from './NewsItems'
import news24 from './news24.jpg'
import Loading from './Loading';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';




export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    }

    articles = [];
    constructor() {
        super();
        this.state = {
            page: 1,
            country: 'in',
            // totalArticles: this.totalResults,
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cb2dabdd9dd4f33bbe29be11880a29c&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        let parcedData = await data.json()


        this.setState({
            articles: parcedData.articles, totalArticles: parcedData.totalResults,
            loading: false

        })

    }
    handlePrevClick = async () => {
        if (!(this.state.page + 1 < Math.ceil(this.state.totalResults / 20))) {


            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cb2dabdd9dd4f33bbe29be11880a29c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });

            let data = await fetch(url);
            let parcedData = await data.json()
            this.setState({
                page: this.state.page - 1,
                articles: parcedData.articles,
                loading: false

            })

        }
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {


            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cb2dabdd9dd4f33bbe29be11880a29c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parcedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parcedData.articles,
                loading: false

            })
        }

    }

    render() {

        return (
            <div className='container my-3' style={{ border: '4px solid black' }}>
                <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
                <hr />
                {this.state.loading && <Loading />}

                <div className='row'>
                    {!this.state.loading && this.state.articles.map((e) => {

                        return <div className='col-md-3 mb-4' key={e.url}>
                            <NewsItems title={e.title ? e.title.slice(0, 45) : ''}
                                description={e.description ? e.description.slice(0, 85) : ""}
                                imageUrl={e.urlToImage ? e.urlToImage : news24}
                                newsUrl={e.url}
                                author={e.author ? e.author : 'Unknow'}
                                date={(e.publishedAt)}
                                source={e.source.name}
                            />
                        </div>

                    })}

                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                </div>

            </div>
        )
    }

}
