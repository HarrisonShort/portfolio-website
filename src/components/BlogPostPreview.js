import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPostPreview(props) {
    return (
        <React.Fragment>
            <li className="blog-post__item">
                <div className="blog-post__item__info">
                    <h1 className="blog-post__item__title">{props.title}</h1>
                    <h2 className="blog-post__item__date">{props.date}</h2>
                    <p className="blog-post__item__text">{props.text}</p>
                    <Link className="blog-post__item__link" to={props.path}>Read More</Link>
                </div>

            </li>
        </React.Fragment >
    )
}
