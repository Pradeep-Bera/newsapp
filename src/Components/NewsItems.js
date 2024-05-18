import React, { Component } from 'react'
// import news24 from './news24.jpg'

export default class NewsItems extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: '18rem', border: '3px solid blue', height: '30rem' }} >
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>

                    <img src={imageUrl} className="card-img-top" alt="..." style={{ height: '12rem' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-muted">By {author} on {date}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}
