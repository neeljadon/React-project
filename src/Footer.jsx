import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center pt-4 pb-3 mt-5">
      <Container>
        <Row className="mb-3">
          <Col>
            <p>Get connected with us on social networks:</p>
            <div>
              <a
                href="https://www.facebook.com/Neelsinghjadon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
                style={{ fontSize: '1.5rem' }}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/neel.jadon10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
                style={{ fontSize: '1.5rem' }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/neel-shankar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
                style={{ fontSize: '1.5rem' }}
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col>
            <strong>Contact Us:</strong> +1 234 567 890 |{' '}
            <strong>Email:</strong> info@apple.com
          </Col>
        </Row>

        <Row className="mb-2">
          <Col>
            <small>&copy; {new Date().getFullYear()} Iphone Reseller. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
