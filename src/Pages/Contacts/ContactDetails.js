import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
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
                          className="avatar pb-2 shadow-sm border-light"
                          src={props.data.avatar}
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

              <Row className="mt-2">
                <Col md={8}>
                  <Card className="p-3 rounded ">
                    <h5 className="text-primary mb-1 ">
                      <b>Contact Details</b>
                    </h5>

                    <Row>
                      <Col md={6}>
                        <small className="text-muted">Contact Name</small>
                        <h6 className="text-dark">{props.data.contact_name}</h6>
                      </Col>
                      <Col md={6}>
                        <small className="text-muted">Company Name</small>
                        <h6 className="text-dark">{props.data.company_name}</h6>
                      </Col>
                      <Col md={6}>
                        <small className="text-muted">Email Address</small>
                        <h6 className="text-dark">{props.data.email}</h6>
                      </Col>
                      <Col md={6}>
                        <small className="text-muted">Phone</small>
                        <h6 className="text-dark">{props.data.phone}</h6>
                      </Col>
                      <Col md={6}>
                        <small className="text-muted">Type</small>
                        <h6 className="text-dark">{props.data.contact_type}</h6>
                      </Col>
                      <Col md={6}>
                        <small className="text-muted">Status</small>
                        <h6>
                          {props.data.status ? (
                            <Badge bg="success">Active</Badge>
                          ) : (
                            <Badge bg="danger">Inactive</Badge>
                          )}
                        </h6>
                      </Col>
                    </Row>
                  </Card>
                </Col>
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
