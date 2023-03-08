import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import icon from './images/icon.svg';
import "./Style.css"
//import {useDispatch,useSelector}from 'react-redux';
function Header() {

  //  const userLogin=useSelector(state=>state.userLogin)
  //  const {data}=userLogin;


  return (
    <Navbar bg="dark"  variant="dark" expand="lg" >
      <Container>
        {/* <Navbar.Brand href="#home">HelthPlus</Navbar.Brand> */}
        <Navbar.Brand href="/" style={{fontSize:50, color:"",textAlign:"left",}}><b><i> 
          <img src={icon} className="Icon"></img>
           {/* <i class="fa-solid fa-hand-holding-medical"></i>  */}
        HelthPlus</i></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Admin</Nav.Link>
            <Nav.Link href="#link">Doctor</Nav.Link>
            <Nav.Link href="#home">Patients</Nav.Link>
            <Nav.Link href="#link">Appointments</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/auth/signup"><Button>SignUp</Button> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;