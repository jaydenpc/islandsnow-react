"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from "react-bootstrap-icons";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './style.css';
import { Container } from "react-bootstrap";

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Pinterest/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseFill/> </Nav.Link>
        <Nav.Link><Search/> </Nav.Link>
        <Nav.Link><PersonFill/> </Nav.Link>
        <NavDropdown title={<Cart/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <Row className = "pt-3">
    <Col className = "col-12 text-center">
      <Image src="https://courses.ics.hawaii.edu/ics314s26/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png" alt="Island Snow Logo" className="img-fluid rounded mx-auto d-block py-1"/>
    </Col>

  </Row>
);

const MiddleMenu = () => (
  <Nav className =  "row justify-content-center pt-4">
    <Col className = "col-1">
      <div className = "dropdown-toggle"><strong>Men</strong></div>
    </Col>
    <Col className = "col-1">
      <div className = "dropdown-toggle"><strong>Women</strong></div>
    </Col>
    <Col className = "col-1">
      <div className = "dropdown-toggle"><strong>Kids</strong></div>
    </Col>
    <Col className = "col-1">
      <div className = "dropdown-toggle"><strong>Brands</strong></div>
    </Col>
    <Col className = "col-1">
      <strong>Search</strong>
    </Col>

  </Nav>
);

const FullWidthImage = () => (
  <Nav className = "row justify-content-center">
    <Image alt = "Island Snow Main Image" className = "img-fluid pt-3" src = "https://courses.ics.hawaii.edu/ics314s26/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"></Image>


  </Nav>
);

const FooterMenu = () => (
  <footer id = "footer" className = "py-5" style = {{backgroundColor: "#292929", color: "white"}}>
        <Container>
            <Row>
                <Col>
                    <h5>NAVIGATION</h5>
                    <hr/>
                    <div className ="list-unstyled">
                        <div>About Us</div>
                        <div>Employment</div>
                        <div>Videos</div>
                     </div>

                </Col>
                <Col>
                    <h5>MAIN MENU</h5>
                    <hr/>
                    <div className="list-unstyled">
                        <div>Men</div>
                        <div>Women</div>
                        <div>Kids</div>
                     </div>

                </Col>

                <Col>
                    <h5>CONNECT</h5>
                    <hr/>
                    <div className="list-unstyled">
                        <div>Sign up for the latest updates</div>
                        <input type="text" placeholder="Enter your email address" />
                        <Button style={{backgroundColor: "#000000ff", borderColor: "#000000ff"}}>Join</Button>
                     </div>

                </Col>

            </Row>

        </Container>


    </footer>
);

export default function Home() {
  return (
    <main>
      <Container>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
      </Container>
    </main>
  );
}