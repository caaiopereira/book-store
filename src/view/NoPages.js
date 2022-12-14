import error from './img/nopage/404.jpg';
import './css/NoPages.css';
import { Outlet } from "react-router-dom";

const NoPage = () => {
    return (
      <>
      <div className="styleNopage">
    <a  href='/'><img src={error} className="banner"/></a>
    </div>
    <Outlet />
    </>
    );
  };
  
  export default NoPage;