import React from 'react';
import BlogPostPreview from './BlogPostPreview';
import './LatestInfoSection.css'

function LatestInfoSection() {
    return (
        <section className="latest-info" id="latest">
            <div className="latest-project">
                <h1>Latest Project</h1>
                <div className="latest-project-info">
                    <div className="latest-project-image">
                        <img src="/images/harrison_okunoshima.jpg" alt="Harrison Okunoshima" className="info-image" />
                    </div>
                    <div className="latest-project-text">
                        <p className="latest-project-title">This website!</p>
                        <p className="latest-project-blurb">I am currently working on this website, which will eventually be my portfolio!</p>
                    </div>

                </div>
            </div>
            {/* <div className="blog-posts__container">
                <h1>Recent Blog Posts</h1>
                <div className="blog-posts__wrapper">
                    <ul className="blog-posts__items">
                        <BlogPostPreview
                            title="Test Blog Post 1"
                            date="21st March 2021"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            path="/blog" />
                        <BlogPostPreview
                            title="Test Blog Post 2"
                            date="21st March 2021"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            path="/blog" />
                        <BlogPostPreview
                            title="Test Blog Post 3"
                            date="21st March 2021"
                            text="this is preview text 3"
                            path="/blog" />
                    </ul>
                </div>
            </div> */}
        </section >
    )
}

export default LatestInfoSection;
