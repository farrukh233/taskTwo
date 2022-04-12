import React from "react";

function PostsPage() {
  const [posts, setPosts] = React.useState([]);
  const [sorts, setSort] = React.useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setPosts(data);
  };
  return (
    <>
      <button onClick={fetchPosts}>Load Posts</button>
      {posts.map(post => {
        return (
          <div key={post.id}>
            {post.id} {post.title}
          </div>
        );
      })}
      <button onClick={fetchPosts}>Sort Posts by Id</button>
      {sorts.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      })}
    </>
  );
}

export default PostsPage;
