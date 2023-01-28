import './styles.css'

export function PostCard({post}) {
  return (
    <div className="post">
      <img className="img-cover" src={post.cover} alt={post.title} />
      <div className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  )
}
