import React from "react";
import { Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./intro";
import Image_Text_Summary from "./ocr_to_text";
import Text_Summary from "./text_to_text";
import Video_Text_Summary from "./video_to_text";
import Text_Generator from "./text_generator";


function Navigation() {
  

  return (
    <Router>

      <Navbar expand="lg" className="c_navbar" variant="dark" id="navbar" fixed="top">
        <Container >
          <Navbar.Brand href="#home" className="nav_heading">Text Z</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link href="/" className="link_item">Home</Nav.Link>

              <NavDropdown title="Services" id="basic-nav-dropdown" className="link_item_cont">
                <NavDropdown.Item href="/text" className="link_item_2">Text to Text Summary</NavDropdown.Item>
                <NavDropdown.Item href="/video_to_text" className="link_item_2">Video to Text Summary</NavDropdown.Item>
                <NavDropdown.Item href="/image_to_text" className="link_item_2">Image to Text Summay</NavDropdown.Item>
                <NavDropdown.Item href="/text_generator" className="link_item_2">Text Generator</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#about" className="link_item">About</Nav.Link>
              <Nav.Link href="#team" className="link_item">Team</Nav.Link>
              <Nav.Link href="#contact" className="link_item">Contact</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/text" component={Text_Summary} />
        <Route  exact path="/video_to_text" component={Video_Text_Summary}/>
       <Route exact path="/image_to_text" component={Image_Text_Summary} />
        <Route  exact path="/text_generator" component={Text_Generator} />
        
      </Switch>
     
    )

    </Router>

  )
};
export default Navigation;