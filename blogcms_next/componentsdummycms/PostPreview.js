import React from "react";
import Link from "next/link";
function PostPreview({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="postPreview">
        <h3>{post.Title}</h3>
        <p>{post.Description}</p>
      </div>
    </Link>
  );
}

export default PostPreview;
