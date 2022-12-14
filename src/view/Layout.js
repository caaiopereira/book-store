import {Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap'
import './css/Layout.css' 
import { Outlet} from "react-router-dom";
import Footer from './Footer'

const Layout = () => {
  return (
    <><>
      <Navbar fixed="top"
        color="dark"
        dark
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="https://images.vexels.com/media/users/3/229082/isolated/preview/6fabc24c3830d75486725cc6d786dfbb-logotipo-dos-circulos-do-livro.png"
            style={{
              height: 40,
              width: 40
            }} />
          <h7 className="buttonStyle">BOOK STORE</h7>
        </NavbarBrand>

        <Nav>
          <NavItem>
            <NavLink href="/">
              <h7 className="buttonStyle">Home</h7>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/Livros">
              <h7 className="buttonStyle">Livros</h7>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/Sobre">
              <h7 className="buttonStyle">Sobre</h7>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/Contatos">
              <h7 className="buttonStyle">Contato</h7>
            </NavLink>
          </NavItem>

        </Nav>
      </Navbar>
      <Outlet />
      
      {/* inclusão do footer */}
    </><Footer /></>
    );
};

export default Layout;