import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className='hover-bob'/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright © 2022 Dhruvkanth Puli</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
