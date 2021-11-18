import React from "react";
import { Footer, Header } from "../../parts/index.js";

const ArticleContent = () => {
  return (
    <div classNameName="d-flex flex-column blog-container">
      <Header />
      <div className="main-wrapper mt-5">
        <div className="blog-post px-3 py-5 p-md-5">
          <div className="container single-col-max-width">
            <header className="blog-post-header">
              <h2 className="title mb-2 text-center"> Tips untuk Meningkatkan Produktivitas Karyawan pada Masa Pandemi</h2>
              <div className="meta mb-3 text-center">
                <span className=" ">
                  <p>Ryan Dahl</p>
                </span>
              </div>
              <div className="meta mb-1">
                <div classNameName="d-flex">
                  <div className="">
                    <p>10 min ago</p>
                  </div>
                  <div className="px-2">
                    <p>16 Feb</p>
                  </div>
                  <div className="px-2">
                    <p>5 min read</p>
                  </div>
                  <div className=" ml-auto ">
                    <img className="img-fluid post-thumb" src="/icons/tags-icon.png" alt="image" height="24" width="24" />
                    <a className="text-link" href="#">
                      Tricks
                    </a>
                    <img className="img-fluid post-thumb ml-3" src="/icons/likes.png" alt="image" height="24" width="24" />
                    <a className="text-link" href="#">
                      5 likes
                    </a>
                  </div>
                </div>
              </div>
            </header>

            <div className="blog-post-body">
              <figure className="blog-banner">
                <a href="https://made4dev.com">
                  <img className="img-fluid" src="/images/blog/contentpic1.png" alt="image" />
                </a>
                <figcaption className="mt-2 text-center image-caption">
                  <p>Image Credit:</p>
                  <a className="theme-link" href="https://made4dev.com?ref=devblog">
                    made4dev.com (Premium Programming T-shirts)
                  </a>
                </figcaption>
              </figure>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.{" "}
              </p>

              <h3 className="mt-5 mb-3">
                <p>Code Block Example</p>
              </h3>
              <p>
                You can get more info at
                <a className="text-link" href="https://highlightjs.org/">
                  https://highlightjs.org/
                </a>
                . Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.{" "}
              </p>

              <h3 className="mt-5 mb-3">Typography</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <h5 className="my-3">Bullet Points:</h5>
              <ul className="mb-5">
                <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
              </ul>
              <ol className="mb-5">
                <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
              </ol>
              <h5 className="my-3">Quote Example:</h5>
              <blockquote className="blockquote m-lg-5 py-3   ps-4 px-lg-5">
                <p className="mb-2">You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.</p>
                <footer className="blockquote-footer mt-0">John Romero</footer>
              </blockquote>

              <h5 className="my-3">Table Example:</h5>
              <table className="table table-striped my-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>

              <div className="ratio ratio-16x9"></div>
            </div>
            <div className="meta mb-1 ">
              <div classNameName="d-flex">
                <div className=" ">
                  <a className="text-link mr-5" href="#">
                    <img className="img-fluid post-thumb ml-3" src="/icons/likes.png" alt="image" height="24" width="24" />
                    likes
                  </a>
                  <a>Share it now ! </a>
                </div>
                <div className=" ml-5 ">
                  <a className="text-link" href="#">
                    <img className="img-fluid post-thumb" src="/icons/logo-wa.png" alt="image" height="24" width="24" />
                  </a>
                  <a className="text-link" href="#">
                    <img className="img-fluid post-thumb ml-3" src="/icons/logo-fb.png" alt="image" height="24" width="24" />
                  </a>
                  <a className="text-link" href="#">
                    <img className="img-fluid post-thumb ml-3" src="/icons/logo-twitter.png" alt="image" height="24" width="24" />
                  </a>
                  <a className="text-link" href="#">
                    <img className="img-fluid post-thumb ml-3" src="/icons/logo-chain.png" alt="image" height="24" width="24" />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-comments-section">
              <div id="disqus_thread"></div>
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default ArticleContent;
