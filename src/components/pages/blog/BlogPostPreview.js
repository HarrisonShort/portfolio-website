import React from 'react'
import { Link } from 'react-router-dom'
import './BlogPostPreview.css'

export default function BlogPostPreview(props) {
    return (
        <React.Fragment>
            <div className="blog-post__item__info">
                <div className="blog-post__header">
                    <h1 className="blog-post__item__title">{props.title}</h1>
                    <p className="blog-post__item__date">{props.date}</p>
                </div>
                <p className="blog-post__item__text">{props.text}</p>
                <div className="blog-post__item__link">
                    <Link className="blog-post__item__link" to={props.path}>Read More</Link>
                </div>
            </div>
        </React.Fragment >
    )
}
