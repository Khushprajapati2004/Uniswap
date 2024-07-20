import "../styles/globals.css";
import { Navbar } from '../Components/index';
import NavBar from "../Components/NavBar/NavBar";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
