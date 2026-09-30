function DummyPostCard({ post }) {
    return (
        <article className="post-card">
        <div className="post-header">
            <div className="avatar">
            {post.userId}
            </div>

            <div>
            <h3>User {post.userId}</h3>
            <span>@user{post.userId}</span>
            </div>
        </div>

        <h3 className="post-title">
            {post.title}
        </h3>

        <p className="post-content">
            {post.body}
        </p>

        <div className="post-tags">
            {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
            ))}
        </div>

        <div className="post-actions">
            <button>
            ❤️ {post.reactions.likes}
            </button>

            <button>
            👎 {post.reactions.dislikes}
            </button>

            <span>
            👁️ {post.views}
            </span>
        </div>
        </article>
    );
}

export default DummyPostCard;