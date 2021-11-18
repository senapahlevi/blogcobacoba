import React from "react";
import AllPost from "../../componentsdummycms/AllPost";
import axios from "axios";
function posts({ posts }) {
  return (
    <div>
      <AllPost posts={posts} />
    </div>
  );
}

export default posts;

export async function getStaticProps() {
  const postRes = await axios.get("http://localhost:1337/posts");
  return {
    props: {
      posts: postRes.data,
    },
  };
}
