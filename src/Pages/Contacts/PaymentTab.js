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
const PaymentTab = (props) => {
    return (
        <>
        <Row className="mt-2">
          <Col md={6}>
        
      <div className="text-white text-center rounded p-3 bg-success d-flex flex-column justify-content-center">
<p>Outstanding Amount</p>
<h1 className="mt-2"><strong> {props.data.outstanding_receivable_amount}</strong> <sup className="h4">{props.data.currency_symbol}</sup> </h1>
      </div>
     
          </Col>
          <Col md={6}>
        
      <div className="text-white text-center rounded p-3 bg-info d-flex flex-column justify-content-center">
<p>Unused Amount</p>
<h1 className="mt-2"><strong> {props.data.unused_credits_receivable_amount}</strong> <sup className="h4">{props.data.currency_symbol}</sup> </h1>
      </div>
     
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
                <b>Tax Details</b>
              </h5>
            </Col>
            <Col md={6} className="text-end">
       
            </Col>
          </Row>
          <hr />
        </Col>
 
  
        {props.data.is_taxable &&(
          <>
           <Col md={6} lg={4}>
          <small className="text-muted">Tax ID</small>
          <h6 className="text-dark">{props.data.tax_id}</h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">Tax Name</small>
          <h6 className="text-dark">{props.data.tax_name}</h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">Tax Percentage</small>
          <h6 className="text-dark">{props.data.tax_percentage} %</h6>
        </Col>
          </>

        )}
           
        <Col md={6} lg={4}>
          <small className="text-muted">Place of contact</small>
          <h6 className="text-dark">{props.data.place_of_contact}</h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">GST Number</small>
          <h6 className="text-dark">{props.data.gst_no}</h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">GST Treatment</small>
          <h6 className="text-dark">{props.data.gst_treatment}</h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">Currency Code</small>
          <h6 className="text-dark">{props.data.currency_code}</h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">Payment Terms</small>
          <h6 className="text-dark">{props.data.payment_terms}</h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">Payment Terms Label</small>
          <h6 className="text-dark">{props.data.payment_terms_label}</h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">Zoho CRM</small>
          <h6>
            {props.data.is_linked_with_zohocrm ? (
              <Badge bg="success">Linked</Badge>
            ) : (
              <Badge bg="danger">Not Linked</Badge>
            )}
          </h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">Payment Reminder</small>
          <h6>
            {props.data.payment_reminder_enabled ? (
              <Badge bg="success">Active</Badge>
            ) : (
              <Badge bg="danger">Inactive</Badge>
            )}
          </h6>
        </Col>
        <Col md={6} lg={4}>
          <small className="text-muted">Website</small>
          <a href={props.data.website} target='_blank' >
          <h6 className="text-dark">{props.data.website}</h6>
          </a>
       
        </Col>
     
     

    
      </Row>
    </Card>

    
        </Col>
      </Row>
      </>
    )
}

export default PaymentTab
