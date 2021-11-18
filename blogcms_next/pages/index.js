import React from "react";

import axios from "axios";
import HomeHeader from "../componentsdummycms/HomeHeader";
import HomeLatestPosts from "../componentsdummycms/HomeLatestPosts";
const Home = ({ posts }) => {
  return (
    <div>
      <HomeHeader />
      <HomeLatestPosts posts={posts} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/posts");
  return {
    props: {
      posts: postsRes.data,
    },
  };
}
