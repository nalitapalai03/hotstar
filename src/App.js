import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Media,Navbar,Carousel,Nav,Button} from 'react-bootstrap';




function App() {
  return (
    <div className="App" >
        <Navbar bg="#121926" variant="dark">
          <span clas="line"></span>
    <Navbar.Brand href="#home"><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">TV</Nav.Link>
      <Nav.Link href="#features">Movies</Nav.Link>
      <Nav.Link href="#pricing">Sports</Nav.Link>
      <Nav.Link href="#home">News</Nav.Link>
      <Nav.Link href="#features">Premium</Nav.Link>
      <Nav.Link href="#pricing">Disney+</Nav.Link>
      <Navbar.Brand href="#home"><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-kids.svg" alt=""/></Navbar.Brand>
      
    </Nav>
    
      <input type="text" placeholder="Search" className="mr-sm-2" />
      
      <i class="fal fa-search"></i>
      <Button variant="primary">SUBSCRIBE</Button>
      <Button variant="outline-light">LOGIN</Button>
    
  </Navbar>
      
      <Carousel class="media" width={{width:'5rem'}} >
  <Carousel.Item>
  <Media>
  <img

    className="mr-3"
    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6194/986194-h"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h2 className="head2">The Big Bull</h2>
    <p className="mp">
    During the late '80s, Hemant Shah, the man with the Midas touch, pulled off the biggest hustle that shook India's financial fabric. Inspired by true event a smalltime stockbroker, who manipulates the loopholes in the country's archaic banking system to create a massive bull run on the stock exchange. But at a time when the Indian economy was taking its big leap towards liberlisation, it was only a matter of time before Harshad Mehta's dream run, ended in a nightmare
    </p>
  </Media.Body>
</Media>
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img

    className="mr-3"
    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2886/892886-h"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h2 className="head2">Tanhaji</h2>
    <h3 className="mp">
      
Tanaji's attempts to recapture the Kondhana fortress once it passes on to Mughal emperor Aurangzeb who transfers its control to his trusted Rajput guard Udaybhan Singh Rathore
    </h3>
  </Media.Body>
</Media>
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img

    className="mr-3"
    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6362/936362-h"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h2 className="head2">The Falcon and The Winter Soldier</h2>
    <p className="mp">
    Six months after being handed the mantle of Captain America at the end of Avengers: Endgame (2019),Sam Wilson teams up with Bucky Barnes in a worldwide adventure that tests their abilities and their patience. 
    </p>
  </Media.Body>
</Media>
  </Carousel.Item>
</Carousel>

      
        
      </div>
      
      

   
  );
}

export default App;
