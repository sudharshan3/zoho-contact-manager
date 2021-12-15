import React from 'react';
import { Badge, Card, Col, Row,UncontrolledTooltip } from "react-bootstrap"
import { Facebook, Link, Twitter } from 'react-feather';
// import {  UncontrolledTooltip } from 'reactstrap';

const ContactTab = (props) => {
    return (
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
                  <Col md={6} className='text-end'>
                
                    <Twitter id='twitter' className='bg-primary p-2 rounded-circle text-white me-2' size={30} style={{cursor:'pointer'}}/>
            
              
                    <Facebook id='facebook' className='bg-info p-2 rounded-circle text-white me-2' size={30} style={{cursor:'pointer'}}/>
                 
                   
     
               
                  </Col>
                </Row>
                <hr/>
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
                  <Col md={6} className='text-end'>
                
                    <Twitter id='twitter' className='bg-primary p-2 rounded-circle text-white me-2' size={30} style={{cursor:'pointer'}}/>
            
              
                    <Facebook id='facebook' className='bg-info p-2 rounded-circle text-white me-2' size={30} style={{cursor:'pointer'}}/>
                 
                   
     
               
                  </Col>
                </Row>
                <hr/>
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
                  <Col md={6} className='text-end'>
                
                    <Twitter id='twitter' className='bg-primary p-2 rounded-circle text-white me-2' size={30} style={{cursor:'pointer'}}/>
            
              
                    <Facebook id='facebook' className='bg-info p-2 rounded-circle text-white me-2' size={30} style={{cursor:'pointer'}}/>
                 
                   
     
               
                  </Col>
                </Row>
                <hr/>
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
                  <Col md={6} className='text-end'>
                
                    <Twitter id='twitter' className='bg-primary p-2 rounded-circle text-white me-2' size={30} style={{cursor:'pointer'}}/>
            
              
                    <Facebook id='facebook' className='bg-info p-2 rounded-circle text-white me-2' size={30} style={{cursor:'pointer'}}/>
                 
                   
     
               
                  </Col>
                </Row>
                <hr/>
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
      </>
       
    )
}

export default ContactTab
