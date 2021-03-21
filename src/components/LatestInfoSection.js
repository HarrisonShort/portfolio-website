import React from 'react';
import BlogPostPreview from './BlogPostPreview';

function LatestInfoSection() {
    return (
        <div>
            <div className="current-project">
                <h1>Latest Project</h1>

            </div>
            <div className="blog-posts__container">
                <h1>Recent Blog Posts</h1>
                <div className="blog-posts__wrapper">
                    <ul className="blog-posts__items">
                        <BlogPostPreview
                            title="Test Blog Post 1"
                            date="21st March 2021"
                            preview-text="this is preview text 1"
                            path="/blog" />
                        <BlogPostPreview
                            title="Test Blog Post 2"
                            date="21st March 2021"
                            preview-text="this is preview text 2"
                            path="/blog" />
                        <BlogPostPreview
                            title="Test Blog Post 3"
                            date="21st March 2021"
                            preview-text="this is preview text 3"
                            path="/blog" />
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default LatestInfoSection;
