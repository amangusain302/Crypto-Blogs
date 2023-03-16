import React from "react";

export default function PostCard({post}) {
  return (
    <div className="card-box">
      <img className="card-box-image" src={post.imageUrl} />
      <div className="card-box-content">
        <h3>{post.title}</h3>
        <div className="editor-section">
          <img src={post.avatar} />
          <span><b>{post.authorName}</b></span>
          <span>{post.publishDate}</span>
        </div>
        <div>
          {post.description}
        </div>
        <div className="blog-tags">
        {
          post.tags.map(tag =>  {
           return <span>{tag}</span>
          })
        }
        </div>
        <div className="card-box-content-button">
        <button className="theme-button"><b>Read more</b></button>
        </div>
      </div>
    </div>
  );
}
