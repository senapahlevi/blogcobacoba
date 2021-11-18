import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

function HomeLatestPosts({ posts }) {
  const [latesstpost, setLatestPosts] = useState([]);
  useEffect(() => {
    setLatestPosts(posts.slice(0, 5)); //ini buat munculin post 5 terakhir
  }, [posts]);

  function renderPostPreviews() {
    return latesstpost.map((post) => {
      return <PostPreview post={post} key={post.id} />; //ini buat id nya dari strapi biar kerender di FE next.js
    });
  }
  return (
    <div>
      <h2>Latest post</h2>
      {renderPostPreviews()}
    </div>
  );
}

export default HomeLatestPosts;
