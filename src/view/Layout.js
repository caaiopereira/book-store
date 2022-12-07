import { Outlet, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavItem, NavLink, Nav} from 'reactstrap'

const Layout = () => {
  return (
    <>
    <Nav>
  <NavItem>
    <NavLink>
    <Link to="/">Home</Link>
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink>
    <Link to="/Produtos">Home</Link>
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      disabled
      href="#"
    >
      Disabled Link
    </NavLink>
  </NavItem>
</Nav>
 <Outlet />
 </>
  );
};

export default Layout;

{/* <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/Midia">Midia</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/Contatos">Contatos</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </> */}