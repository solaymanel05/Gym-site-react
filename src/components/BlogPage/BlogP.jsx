import React from "react";
import "./BlogP.css";
import imgBlog from "../../assets/images/ads.jpg";
import imgCont from "../../assets/images/ssd.jpg";
import Nav from "../1.Navbar/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMagnifyingGlass,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import { blogs, recentPosts } from "../../assets/data/data";
import Footer from "../13.Footer/Footer";

export default function BlogP() {
  return (
    <>
      <Nav />
      <div className="cont-about">
        <img src={imgCont} alt="" />
        <div className="backg"></div>
        <h1>Blog</h1>
      </div>
      <div className="blog-container">
        <div className="cont-blog-left">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-left">
              <img src={blog.img} alt={blog.altText} className="blog-image" />
              <div className="title-of-img-blog">
                <FontAwesomeIcon className="icon-title-blog" icon={faTag} />
                <p className="paragraph-title">
                  By {blog.author} | {blog.date} | {blog.category}
                </p>
              </div>
              <h1>{blog.title}</h1>
              <h4 className="paragraph-blog">{blog.content}</h4>
              <button className="read-more-btn">Read More</button>
            </div>
          ))}
        </div>
        <div className="blog-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">
              <FontAwesomeIcon
                className="icon-search-blog"
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <div className="categories">
            <h2>Categories</h2>
            <ul>
              <div className="category-blog">
                <li>
                  <FontAwesomeIcon
                    className="icon-blog"
                    icon={faChevronRight}
                  />
                  Fitness
                </li>
                <li>(1)</li>
              </div>
              <div className="category-blog">
                <li>
                  {" "}
                  <FontAwesomeIcon
                    className="icon-blog"
                    icon={faChevronRight}
                  />
                  Nutrition
                </li>
                <li>(1)</li>
              </div>
              <div className="category-blog">
                <li>
                  {" "}
                  <FontAwesomeIcon
                    className="icon-blog"
                    icon={faChevronRight}
                  />
                  Workouts
                </li>
                <li>(2)</li>
              </div>
              <div className="category-blog">
                <li>
                  {" "}
                  <FontAwesomeIcon
                    className="icon-blog"
                    icon={faChevronRight}
                  />
                  Wellness
                </li>
                <li>(2)</li>
              </div>
              <div className="category-blog">
                <li>
                  {" "}
                  <FontAwesomeIcon
                    className="icon-blog"
                    icon={faChevronRight}
                  />
                  Wellness
                </li>
                <li>(3)</li>
              </div>
              <div className="category-blog">
                <li>
                  {" "}
                  <FontAwesomeIcon
                    className="icon-blog"
                    icon={faChevronRight}
                  />
                  Wellness
                </li>
                <li>(3)</li>
              </div>
              <div className="category-blog">
                <li>
                  {" "}
                  <FontAwesomeIcon
                    className="icon-blog"
                    icon={faChevronRight}
                  />
                  Wellness
                </li>
                <li>(3)</li>
              </div>
            </ul>
          </div>

          <div className="recent-posts">
            <h2>Recent Posts</h2>
            <ul>
              {recentPosts.map((post, index) => (
                <div className="post-blog" key={index}>
                  <div className="cont-img-post-blog">
                    <img className="postBlog-img" src={post.image} alt="" />
                  </div>
                  <div className="content-post-blog">
                    <li>
                      <h5>{post.date}</h5>
                    </li>
                    <li>
                      <h3>{post.title}</h3>
                    </li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className="popular-tags">
            <h2>Popular Tags</h2>
            <div className="tags">
              <span className="tag">#Fitness</span>
              <span className="tag">#Yoga</span>
              <span className="tag">#Health</span>
              <span className="tag">#Nutrition</span>
            </div>
          </div>
          <div className="img-ads">
            <img src={imgBlog} alt="" />
            <div className="sold"></div>
            <div className="soldInfo"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
