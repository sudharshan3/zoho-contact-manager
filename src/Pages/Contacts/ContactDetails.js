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
      <Col className=" g-md-2 position-relative">
        {props.transition((style, item) =>
          item ? (
            <animated.div
              className="bg-white rounded shadow p-3 item h-100 position-relative"
              style={style}
            >
              <div className="contact-details-container"></div>
              {childTransition((style, item) =>
                item ? (
                  <animated.div style={style}>
                    <Row>
                      <Col md={6}>
                        <img
                          className="avatar pb-2  rounded-circle"
                          src={props.data.avatar?props.data.avatar:defaultavatar}
                        />
                        <div>
                          <h3 className="mb-0 mt-2">
                            {" "}
                            <strong>{props.data.contact_name}</strong>{" "}
                          </h3>
                          <small>{props.data.email}</small>
                        </div>
                      </Col>
                      <Col md={6} className="text-end mt-auto">
                        <Button variant="success" className="me-2">
                          <Edit /> Edit
                        </Button>
                        <Button variant="danger" className="me-2">
                          <Trash /> Delete
                        </Button>
                      </Col>
                    </Row>
                  </animated.div>
                ) : (
                  ""
                )
              )}

<Tab.Container id="left-tabs-example" defaultActiveKey="first" >
  <Row className="mt-3">
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
    <Col sm={12}>
      <Tab.Content className="viewtab p-1" >
        <Tab.Pane eventKey="first">
   <ContactTab data={props.data} />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        "second"
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        "third"
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
           

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
