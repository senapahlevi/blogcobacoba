import React from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";

function PostPage({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.Content);

  return (
    <div>
      <article>
        <header>
          <h1>hey ini post page</h1>
          <h1>{post.Title}</h1>
          <h1>{post.Description}</h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
      </article>
    </div>
  );
}
/*
ini biar aman ga ada hekel <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section> 
karena di strapi editor tulisan blog nya misal ada orang iseng <script> alert("anda di hek") </script> ini malah 
jadi string bukan berupa program
*/
export default PostPage;

export async function getStaticProps({ params }) {
  //id berapa yang akan di render nih ini di localhost:300/posts/OtherPost/id nya gitu
  const postRest = await axios.get(`http://localhost:1337/posts/${params.id}`);
  return {
    props: {
      post: postRest.data,
    },
  };
}

export async function getStaticPaths() {
  //static path buat old postingan
  //ini bagian generate id
  const postsRes = await axios.get("http://localhost:1337/posts");

  const paths = postsRes.data.map((post) => {
    return {
      params: { id: post.id.toString() }, //halaman milik objek ini sebenarnya sedang kita kunjungi
    };
    //telling for each path what is params are so match id: to actuallnumber( id .tostring()) params (utk multiple obj)
  });

  return {
    paths,
    fallback: false, //kalo false artinya dia not found 404
  };
}
