import error from './img/404.jpg';
import './css/NoPages.css';
import { Outlet, Link } from "react-router-dom";

const NoPage = () => {
    return (
      <>
    <img src={error} className="banner" />
    <button><Link to="/">Home</Link></button>
    <Outlet />
    </> // div filho
    );
  };
  
  export default NoPage;