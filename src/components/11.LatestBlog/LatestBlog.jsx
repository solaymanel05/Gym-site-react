import React from "react";
import "./LatestBlog.css";
import { blogData } from "../../assets/data/data";
import { Link } from "react-router-dom";

export default function LatestBlog() {
  return (
    <>
      <div className="latest-blog">
        <div className="title-blog">
          <h2>LATEST BLOG</h2>
          <h1>Our Recent News</h1>
          <p>
            Core revive an unknown printer took a galley of type and scrambled
            make a type specimen book.
          </p>
        </div>

        <div className="blog-container">
          {blogData.map((post, index) => (
            <div key={index} className="blog-card">
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-summary">{post.summary}</p>
            <Link to={"./BlogP"}> <button className="btn-blog-link">Read More</button></Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
