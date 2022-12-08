import error from './img/404.jpg';
import './css/NoPages.css';
import { Outlet} from "react-router-dom";

const NoPage = () => {
    return (
      <>
    <a href='/'><img src={error} className="banner"/></a>
    <Outlet />
    </>
    );
  };
  
  export default NoPage;