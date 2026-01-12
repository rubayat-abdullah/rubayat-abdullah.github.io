import { blogPosts } from "../data/config";

const Blog = () => {
  return (
    <section id="blog" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                {post.image ? (
                  <img src={post.image} alt={post.title} />
                ) : (
                  <div className="blog-placeholder">
                    <i className="fas fa-pen-fancy"></i>
                  </div>
                )}
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.url} className="blog-link">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
