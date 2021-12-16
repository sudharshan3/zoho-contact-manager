import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import defaultavatar from '../../assets/images/avatar-blue.png';
import ContactTab from "./ContactTab";
import {
  ChevronRight,
  Crosshair,
  Delete,
  Edit,
  Trash,
  User,
  X,
} from "react-feather";
import { animated, useTransition } from "react-spring";
import PaymentTab from "./PaymentTab";
import ContactPersons from "./ContactPersons";

const ContactDetails = (props) => {
  const [loop, setLoop] = useState(0);
  const childTransition = useTransition(props.change, {
    from: { transform: "translateY(50%)", opacity: 0 },
    enter: { transform: "translateY(0%)", opacity: 1 },
    delay: 200,
  });

  useEffect(() => {
    setTimeout(() => {
      props.setLayout(false);
    }, 200);
  }, [loop]);

  const changeVisibility = () => {
    props.setVisible(false);
    setLoop(!loop);
  };

  return (
    <>
      <Col className=" g-md-2 position-relative h-100">
        
        {props.transition((style, item) =>
          item ? (
            <animated.div
              className="bg-white rounded shadow p-3 item h-100 position-relative"
              style={style}
            >
              <div className="contact-details-container "></div>
              <div style={{height:'20%'}} className="mb-3">
              {childTransition((style, item) =>
                item ? (
                  <animated.div style={style} >
                    <Row className="h-100">
                      <Col md={6} className="h-100">
                        <img
                          className="avatar pb-2  rounded-circle"
                          src={props.data.avatar?props.data.avatar:defaultavatar}
                        />
                        <div>
                          <h4 className="mb-0">
                       
                            <strong>{props.data.contact_name}</strong>{" "}
                          </h4>
                         
                        </div>
                      </Col>
                      <Col md={6} className="text-end my-auto">
                        <Button variant="success" className=" rounded-circle p-3 me-2" size='sm'>
                          <Edit /> 
                        </Button>
                        <Button variant="danger" className=" rounded-circle p-3 me-5" size='sm'>
                          <Trash /> 
                        </Button>
                      </Col>
                    </Row>
                  </animated.div>
                ) : (
                  ""
                )
              )}
              </div>
         
              <Row style={{height:'80%',overflow:'hidden'}}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
  <Row className=" h-100">
    <Col sm={12}>
      <Nav fill  variant="pills" className="flex-row">
        <Nav.Item>
          <Nav.Link eventKey="first">General Details</Nav.Link>
        </Nav.Item>
    
        <Nav.Item>
          
          <Nav.Link eventKey="second">Payment Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Contact Persons</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={12} className="h-100">
      <Tab.Content className="viewtab p-1 h-100" >
        <Tab.Pane eventKey="first">
   <ContactTab data={props.data} />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <PaymentTab data={props.data} />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <ContactPersons data={props.data} />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
              </Row>


           

              <button
                className="btn-sm close-btn  btn-outline-secondary"
                onClick={() => changeVisibility()}
              >
                <X />
              </button>
            </animated.div>
          ) : (
            ""
          )
        )}
      </Col>
    </>
  );
};

export default ContactDetails;
