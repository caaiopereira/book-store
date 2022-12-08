import {Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap'
import './css/Layout.css' 
import { Outlet} from "react-router-dom"

const Layout = () => {
  return (
<>
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
        }}
      />
      <h7 className="buttonStyle">REACTSTRAP</h7>
    </NavbarBrand>

    <Nav >
  <NavItem  >
  <NavLink href="/">
     <h7 className="buttonStyle">Home</h7> 
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
</>
    );
};

export default Layout;

// import { Outlet, Link } from "react-router-dom";
// import {NavItem, NavLink, Nav, Button} from 'reactstrap'

// const Layout = () => {
//   return (
//     <>
//     <Nav>
//   <NavItem>
//   <NavLink href="/">
//      Home
//     </NavLink>
//   </NavItem>
//   <NavItem>
//     <NavLink href="/Sobre">
//     Sobre
//     </NavLink>
//   </NavItem>
//   <NavItem>
//     <NavLink href="/Contatos">Contatos
//     </NavLink>
//   </NavItem>
// </Nav>
//  <Outlet />
//  </>
//   );
// };

// export default Layout;