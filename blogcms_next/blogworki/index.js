import React from "react";
import Head from "next/head";
//components
import { Footer, Header } from "../../parts/index.js";
import IconBg from "../../elements/IconBg.jsx";
import Button from "../../elements/Button.jsx";
import ContentBlog from "./ContentBlog.js";
const HomeBlog = () => {
  return (
    <div className="d-flex flex-column blog-container">
      <section>
        <Header />
      </section>
      <ContentBlog />
      <footer className="bg-primary text-lg-start ">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeBlog;
