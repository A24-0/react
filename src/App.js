import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsSearch, BsBricks, BsBell, BsPerson } from 'react-icons/bs';
import './App.css';

// ... (предыдущий код)

const NavigationMenu = () => {
  return (
    <Container fluid className="navigation-menu">
      <div className="d-flex align-items-center">
        <div className="logo">User Profile</div>
      </div>
      <div className="search-form">
        <Form>
          <Form.Group controlId="searchForm">
            <Form.Control type="text" placeholder="Search..." />
            <BsSearch className="search-icon" />
          </Form.Group>
        </Form>
      </div>
      <div className="d-flex align-items-center">
        <div className="icon-column">
          <BsBricks className="icon" />
        </div>
        <div className="icon-column">
          <BsBell className="icon" />
        </div>
        <div className="icon-column">
          <BsPerson className="icon" />
        </div>
      </div>
    </Container>
  );
};

// ... (последующий код)


const ProfileForm = () => {
  return (
    <Container fluid className="profile-form">
      <Row>
        <Col xs={7}>
          <div className="form-title">Edit Profile</div>
          <div className="form-subtitle">Complete your profile</div>
          <Form>
            {/* Первая строка */}
            <Form.Group controlId="formCompanyName">
              <Form.Label>Company (disabled)</Form.Label>
              <Form.Control type="text" placeholder="Enter your company name" disabled />

            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" />

            </Form.Group>

            <Form.Group controlId="formEmailAddress">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email address" />

            </Form.Group>

            {/* Вторая строка */}
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />

            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />

            </Form.Group>

            {/* Третья строка */}
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />

            </Form.Group>

            {/* Четвертая строка */}
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city" />

            </Form.Group>

            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter your country" />

            </Form.Group>

            <Form.Group controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" placeholder="Enter your postal code" />

            </Form.Group>

            {/* Пятая строка */}
            <Form.Group controlId="formAboutMe">
              <Form.Label>About me</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Tell us about yourself..." />

            </Form.Group>

            {/* Кнопка Update Profile */}
            <Button variant="danger" className="update-profile-btn">
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const App = () => {
  return (
    <div>
      <NavigationMenu />
      <Container fluid>
        <Row>
          <Col xs={8}>
            <ProfileForm />
          </Col>
          <Col xs={4}>
            <div className="ceo-description">
              <div className="ceo-image"></div>
              <div className="ceo-title">CEO / CO-FOUNDER</div>
              <div className="ceo-text">Don't be scared bla bla bla bla bla bla</div>
              <Button variant="danger" className="follow-btn">
                Follow
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default App;
