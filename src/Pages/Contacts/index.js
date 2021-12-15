import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AppHeader from "../../components/AppHeader";
import ContactConfig from "./ContactConfig";

const ContactPage = () => {
 
  return (
    <React.Fragment>
      <AppHeader />
      <Container className="centered-content">
        <ContactConfig />
      </Container>
    </React.Fragment>
  );
};

export default ContactPage;
