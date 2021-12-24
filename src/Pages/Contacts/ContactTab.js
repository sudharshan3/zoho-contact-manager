import React from "react";
import { Badge, Card, Col, Row, UncontrolledTooltip } from "react-bootstrap";
import {
  CreditCard,
  Facebook,
  Link,
  Map,
  MapPin,
  Phone,
  Printer,
  Twitter,
  User,
} from "react-feather";
// import {  UncontrolledTooltip } from 'reactstrap';

const ContactTab = (props) => {
  return (
    <>
    {props.data &&(
      <>
         <Row className="mt-2">
        <Col md={12}>
          <Card className="p-3 rounded ">
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={6}>
                    <h5 className="text-primary mb-0 ">
                      <b>General Details</b>
                    </h5>
                  </Col>
                  <Col md={6} className="text-end">
                    <Twitter
                      id="twitter"
                      className="bg-primary p-2 rounded-circle text-white me-2"
                      size={30}
                      style={{ cursor: "pointer" }}
                    />

                    <Facebook
                      id="facebook"
                      className="bg-info p-2 rounded-circle text-white me-2"
                      size={30}
                      style={{ cursor: "pointer" }}
                    />
                  </Col>
                </Row>
                <hr />
              </Col>
              <Col md={6} lg={4}>
                <small className="text-muted">Contact Name</small>
                <h6 className="text-dark">{props.data.contact_name}</h6>
              </Col>
              <Col md={6} lg={4}>
                <small className="text-muted">Company Name</small>
                <h6 className="text-dark">{props.data.company_name}</h6>
              </Col>
              <Col md={6} lg={4}>
                <small className="text-muted">Email Address</small>
                <h6 className="text-dark">{props.data.email}</h6>
              </Col>
              <Col md={6} lg={4}>
                <small className="text-muted">Phone</small>
                <h6 className="text-dark">{props.data.mobile}</h6>
              </Col>
              <Col md={6} lg={4}>
                <small className="text-muted">Type</small>
                <h6 className="text-dark">{props.data.contact_type}</h6>
              </Col>
              <Col md={6} lg={4}>
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
      <Row className="mt-2 mb-5">
        <Col md={12}>
          <Card className="p-3 rounded ">
            <Row>
              <Col md={12}>
                <Row>
                  <Col md={6}>
                    <h5 className="text-primary mb-0 ">
                      <b>Contact Details</b>
                    </h5>
                  </Col>
                  <Col md={6} className="text-end"></Col>
                </Row>
                <hr />
              </Col>
              {props.data&&props.data.billing_address && (
                        <Col md={6}>
                        <div className="p-3 rounded bg-light">
                          <h6 className="text-primary">
                        
                            <strong>Billing Address</strong>{" "}
                          </h6>
        
                          <p className="mt-2">
                            <User className="text-muterd me-2" size={15} />
                            {props.data.billing_address.attention}
                          </p>
                          <p className="mt-2">
                            <Phone className="text-muterd me-2" size={15} />
                            Phone: {props.data.billing_address.phone}
                          </p>
                          <p className="mt-2">
                            <Printer className="text-muterd me-2" size={15} />
                            Fax: {props.data.billing_address.fax}
                          </p>
        
                          <p className="d-flex justify-content-start flex-row mt-2">
                            <MapPin className="text-muterd me-2" size={15} />
        
                            <span className="d-flex justify-content-center flex-column">
                              <span>
                                {props.data.billing_address.address} -{" "}
                                {props.data.billing_address.street2}
                              </span>
                              <span>
                                <small>{props.data.billing_address.city} - </small>
                                <small>{props.data.billing_address.state} - </small>
                                <small>{props.data.billing_address.country}</small>
                              </span>
                            </span>
                          </p>
        
                          {/* "attention": "Mr.John",
                "address": "4900 Hopyard Rd, Suite 310",
                "street2": "Suite 310",
                "state_code": "CA",
                "city": "Pleasanton",
                "state": "CA",
                "zip": 94588,
                "country": "U.S.A",
                "fax": 1234,
                "phone": "1234" */}
                        </div>
                      </Col>
              )}
      {props.data&&
        props.data.shipping_address&&(
          <Col md={6}>
          <div className="p-3 rounded bg-light">
            <h6 className="text-primary">
          
              <strong>Shipping Address</strong>{" "}
            </h6>

            <p className="mt-2">
              <User className="text-muterd me-2" size={15} />
              {props.data.shipping_address.attention}
            </p>
            <p className="mt-2">
              <Phone className="text-muterd me-2" size={15} />
              Phone: {props.data.shipping_address.phone}
            </p>
            <p className="mt-2">
              <Printer className="text-muterd me-2" size={15} />
              Fax: {props.data.shipping_address.fax}
            </p>

            <p className="d-flex justify-content-start flex-row mt-2">
              <MapPin className="text-muterd me-2" size={15} />

              <span className="d-flex justify-content-center flex-column">
                <span>
                  {props.data.shipping_address.address} -{" "}
                  {props.data.shipping_address.street2}
                </span>
                <span>
                  <small>{props.data.shipping_address.city} - </small>
                  <small>{props.data.shipping_address.state} - </small>
                  <small>{props.data.shipping_address.country}</small>
                </span>
              </span>
            </p>

            {/* "attention": "Mr.John",
  "address": "4900 Hopyard Rd, Suite 310",
  "street2": "Suite 310",
  "state_code": "CA",
  "city": "Pleasanton",
  "state": "CA",
  "zip": 94588,
  "country": "U.S.A",
  "fax": 1234,
  "phone": "1234" */}
          </div>
        </Col>
        )
      }
         
            </Row>
          </Card>
        </Col>
      </Row>
      </>
    )}
   
    </>
  );
};

export default ContactTab;
