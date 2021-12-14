import React from "react";
import { Container } from "react-bootstrap";
import ContactConfig from "./ContactConfig";

 const ContactPage = () => {
    return (
      <React.Fragment>
          <Container className="centered-content">
          <ContactConfig  />
          </Container>
         
      </React.Fragment>
    )
}

export default ContactPage;
