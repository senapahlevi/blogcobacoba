import NavBardummy from "../componentsdummycms/NavBardummy";
//import "../styles/globals.css";
import "../styles/index.scss";
function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <NavBardummy />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
