import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { render } from "react-dom";
import { useNavigate } from "react-router-dom";
import ReactWizard from "react-bootstrap-wizard";
import "react-bootstrap-wizard/dist/react-wizard.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Stepper from "bs-stepper";
import { Plus, X } from "react-feather";

class ContactAddEditModal extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  state = {

    avatar: null,
    validated1: false,
    validated2: false,
    validated3: false,
    validated4: false,
    Taxable: false,
    formData: null,
    contact_name: null,
    company_name: null,
    email: null,
    mobile: null,
    tax_id: null,
    tax_name: null,
    tax_percentage: null,
    place_of_contact: null,
    gst_no: null,
    gst_treatment: null,
    is_linked_with_zohocrm: false,
    website: null,
    facebook: null,
    twitter: null,
    payment_terms: null,
    payment_terms_label: null,
    currency_code: null,
    outstanding_receivable_amount: null,
    unused_credits_receivable_amount: null,
    b_attention: null,
    b_address: null,
    b_street2: null,
    b_state_code: null,
    b_city: null,
    b_state: null,
    b_zip: null,
    b_country: null,
    b_fax: null,
    b_phone: null,
    s_attention: null,
    s_address: null,
    s_street2: null,
    s_state_code: null,
    s_city: null,
    s_state: null,
    s_zip: null,
    s_country: null,
    s_fax: null,
    s_phone: null,
    samebilling: false,
    contact_persons: [],
    cp_salution: null,
    cp_first_name: null,
    cp_last_name: null,
    cp_email: null,
    cp_phone: null,
  };
  toggleModal = () => {
    this.props.closeAddEditModal();
  };

  componentDidMount = () => {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
    });
    if (this.props.toggleAddEditModal) {
      this.setState({
        moveNext: false,
        validated1: false,
        validated2: false,
        validated3: false,
        validated4: false,
        Taxable: false,
        formData: null,
        contact_name: null,
        company_name: null,
        email: null,
        mobile: null,
        tax_id: null,
        tax_name: null,
        tax_percentage: null,
        place_of_contact: null,
        gst_no: null,
        gst_treatment: null,
        is_linked_with_zohocrm: false,
        website: null,
        payment_terms: null,
        payment_terms_label: null,
        currency_code: null,
        outstanding_receivable_amount: null,
        unused_credits_receivable_amount: null,
        contact_persons: [],
        b_attention: null,
        b_address: null,
        b_street2: null,
        b_state_code: null,
        b_city: null,
        b_state: null,
        b_zip: null,
        b_country: null,
        b_fax: null,
        b_phone: null,
        s_attention: null,
        s_address: null,
        s_street2: null,
        s_state_code: null,
        s_city: null,
        s_state: null,
        s_zip: null,
        s_country: null,
        s_fax: null,
        s_phone: null,
        samebilling: false,
        cp_salution: null,
        cp_first_name: null,
        cp_last_name: null,
        cp_email: null,
        cp_phone: null,
      });

      if (this.props.data !== null) {
        this.setState({
          moveNext: false,
          validated1: false,
          validated2: false,
          validated3: false,
          validated4: false,
          avatar: this.props.data.avatar,
          Taxable: this.props.data.is_taxable,
          formData: null,
          contact_name: this.props.data.contact_name,
          company_name: this.props.data.company_name,
          email: this.props.data.email,
          mobile: this.props.data.mobile,
          tax_id: this.props.data.tax_id,
          tax_name: this.props.data.tax_name,
          tax_percentage: this.props.data.tax_percentage,
          place_of_contact: this.props.data.place_of_contact,
          gst_no: this.props.data.gst_no,
          gst_treatment: this.props.data.gst_treatment,
          is_linked_with_zohocrm: this.props.data.is_linked_with_zohocrm,
          website: this.props.data.website,
          payment_terms: this.props.data.payment_terms,
          payment_terms_label: this.props.data.payment_terms_label,
          contact_persons: this.props.data.contact_persons,
          b_attention: this.props.data.billing_address.attention,
          b_address: this.props.data.billing_address.address,
          b_street2: this.props.data.billing_address.street2,
          b_state_code: this.props.data.billing_address.state_code,
          b_city: this.props.data.billing_address.city,
          b_state: this.props.data.billing_address.state,
          b_zip: this.props.data.billing_address.zip,
          b_country: this.props.data.billing_address.country,
          b_fax: this.props.data.billing_address.fax,
          b_phone: this.props.data.billing_address.phone,
          s_attention: this.props.data.shipping_address.attention,
          s_address: this.props.data.shipping_address.address,
          s_street2: this.props.data.shipping_address.street2,
          s_state_code: this.props.data.shipping_address.state_code,
          s_city: this.props.data.shipping_address.city,
          s_state: this.props.data.shipping_address.state,
          s_zip: this.props.data.shipping_address.zip,
          s_country: this.props.data.shipping_address.country,
          s_fax: this.props.data.shipping_address.fax,
          s_phone: this.props.data.shipping_address.phone,
      
  
        });
      }
    }
  };

  addContactData = () => {
    let data = {
      contact_id: Math.floor(Math.random() * 1000000),
      avatar:
        "https://i.pravatar.cc/150?img=" +
        Math.floor(Math.random() * (9 - 1) + 1),
      contact_name: this.state.contact_name,
      company_name: this.state.company_name,
      email: this.state.email,
      mobile: this.state.mobile,
      is_taxable: this.state.Taxable,
      tax_id: this.state.tax_id,
      tax_name: this.state.tax_name,
      tax_authority_id: Math.floor(Math.random() * 1000000),
      tax_exemption_id: Math.floor(Math.random() * 1000000),
      tax_percentage: this.state.tax_percentage,
      place_of_contact: this.state.place_of_contact,
      gst_no: this.state.gst_no,
      primary_contact_id: Math.floor(Math.random() * 1000000),
      currency_id: Math.floor(Math.random() * 1000000),
      gst_treatment: this.state.gst_treatment,
      is_linked_with_zohocrm: this.state.is_linked_with_zohocrm,
      website: this.state.website,
      currency_code: "USD",
      currency_symbol: "$",
      payment_terms: this.state.payment_terms,
      payment_terms_label: this.state.payment_terms_label,
      currency_code: this.state.currency_code,
      outstanding_receivable_amount: Math.floor(Math.random() * 100),
      outstanding_receivable_amount_bcy: Math.floor(Math.random() * 100),
      unused_credits_receivable_amount: Math.floor(Math.random() * 100),
      unused_credits_receivable_amount_bcy: Math.floor(Math.random() * 100),
      status: "active",
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      billing_address: {
        attention: this.state.b_attention,
        address: this.state.b_address,
        street2: this.state.b_street2,
        state_code: this.state.b_state_code,
        city: this.state.b_city,
        state: this.state.b_state,
        zip: this.state.b_zip,
        country: this.state.b_country,
        fax: this.state.b_fax,
        phone: this.state.b_phone,
      },
      default_templates: {
        invoice_template_id: Math.floor(Math.random() * 1000000),
        invoice_template_name: "Custom Classic",
        estimate_template_id: Math.floor(Math.random() * 1000000),
        estimate_template_name: "Service - Professional",
        creditnote_template_id: Math.floor(Math.random() * 1000000),
        creditnote_template_name: "Fixed Cost - Professional",
        invoice_email_template_id: Math.floor(Math.random() * 1000000),
        invoice_email_template_name: "Custom Invoice Notification",
        estimate_email_template_id: Math.floor(Math.random() * 1000000),
        estimate_email_template_name: "Custom Estimate Notification",
        creditnote_email_template_id: Math.floor(Math.random() * 1000000),
        creditnote_email_template_name: "Custom Credit Note Notification",
      },
      notes: "Payment option : Through check",
      created_time: new Date().toLocaleString(),
      last_modified_time: new Date().toLocaleString(),

      contact_persons: this.state.contact_persons,
    };
    if (this.state.samebilling) {
      data.shipping_address = {
        attention: this.state.b_attention,
        address: this.state.b_address,
        street2: this.state.b_street2,
        state_code: this.state.b_state_code,
        city: this.state.b_city,
        state: this.state.b_state,
        zip: this.state.b_zip,
        country: this.state.b_country,
        fax: this.state.b_fax,
        phone: this.state.b_phone,
      };
    } else {
      data.shipping_address = {
        attention: this.state.s_attention,
        address: this.state.s_address,
        street2: this.state.s_street2,
        state_code: this.state.s_state_code,
        city: this.state.s_city,
        state: this.state.s_state,
        zip: this.state.s_zip,
        country: this.state.s_country,
        fax: this.state.s_fax,
        phone: this.state.s_phone,
      };
    }
    this.getContactAdd(data);
  };
  updateContactData = () => {
    let data = {
     
      contact_name: this.state.contact_name,
      company_name: this.state.company_name,
      email: this.state.email,
      mobile: this.state.mobile,
      is_taxable: this.state.Taxable,
      tax_id: this.state.tax_id,
      tax_name: this.state.tax_name,
      tax_authority_id: Math.floor(Math.random() * 1000000),
      tax_exemption_id: Math.floor(Math.random() * 1000000),
      tax_percentage: this.state.tax_percentage,
      place_of_contact: this.state.place_of_contact,
      gst_no: this.state.gst_no,
      primary_contact_id: Math.floor(Math.random() * 1000000),
      currency_id: Math.floor(Math.random() * 1000000),
      gst_treatment: this.state.gst_treatment,
      is_linked_with_zohocrm: this.state.is_linked_with_zohocrm,
      website: this.state.website,
      currency_code: "USD",
      currency_symbol: "$",
      payment_terms: this.state.payment_terms,
      payment_terms_label: this.state.payment_terms_label,
      currency_code: this.state.currency_code,
      status: "active",
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      billing_address: {
        attention: this.state.b_attention,
        address: this.state.b_address,
        street2: this.state.b_street2,
        state_code: this.state.b_state_code,
        city: this.state.b_city,
        state: this.state.b_state,
        zip: this.state.b_zip,
        country: this.state.b_country,
        fax: this.state.b_fax,
        phone: this.state.b_phone,
      },
      default_templates: {
        invoice_template_id: Math.floor(Math.random() * 1000000),
        invoice_template_name: "Custom Classic",
        estimate_template_id: Math.floor(Math.random() * 1000000),
        estimate_template_name: "Service - Professional",
        creditnote_template_id: Math.floor(Math.random() * 1000000),
        creditnote_template_name: "Fixed Cost - Professional",
        invoice_email_template_id: Math.floor(Math.random() * 1000000),
        invoice_email_template_name: "Custom Invoice Notification",
        estimate_email_template_id: Math.floor(Math.random() * 1000000),
        estimate_email_template_name: "Custom Estimate Notification",
        creditnote_email_template_id: Math.floor(Math.random() * 1000000),
        creditnote_email_template_name: "Custom Credit Note Notification",
      },
      notes: "Payment option : Through check",
      created_time: new Date().toLocaleString(),
      last_modified_time: new Date().toLocaleString(),

      contact_persons: this.state.contact_persons,
    };
    if (this.state.samebilling) {
      data.shipping_address = {
        attention: this.state.b_attention,
        address: this.state.b_address,
        street2: this.state.b_street2,
        state_code: this.state.b_state_code,
        city: this.state.b_city,
        state: this.state.b_state,
        zip: this.state.b_zip,
        country: this.state.b_country,
        fax: this.state.b_fax,
        phone: this.state.b_phone,
      };
    } else {
      data.shipping_address = {
        attention: this.state.s_attention,
        address: this.state.s_address,
        street2: this.state.s_street2,
        state_code: this.state.s_state_code,
        city: this.state.s_city,
        state: this.state.s_state,
        zip: this.state.s_zip,
        country: this.state.s_country,
        fax: this.state.s_fax,
        phone: this.state.s_phone,
      };
    }
    this.getContactUpdate(data);
  }
  getContactAdd = async (data) => {
    try {
      const res = await fetch("/api/contacts/add", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const json = await res.json();
      this.toggleModal();
    } catch (e) {
      console.log(e);
    }
  };
  getContactUpdate = async (data) => {
    try {
      const res = await fetch("/api/contacts/update/"+this.props.data.contact_id, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      const json = await res.json();
      this.toggleModal();
    } catch (e) {
      console.log(e);
    }
  };

  handleSubmit1 = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      this.setState({ moveNext: false });
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.stepper.next();
      this.setState({ moveNext: true });
      this.setState({ validated1: false });
    }

    this.setState({ validated1: true });
  };
  handleSubmit2 = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      this.setState({ moveNext: false });
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.stepper.next();
      this.setState({ moveNext: true });
      this.setState({ validated2: false });
    }

    this.setState({ validated2: true });
  };
  handleSubmit3 = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      this.setState({ moveNext: false });
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.stepper.next();
      this.setState({ moveNext: true });
      this.setState({ validated3: false });
    }

    this.setState({ validated3: true });
  };
  handleSubmit4 = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      this.setState({ moveNext: false });
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.stepper.next();
      this.setState({ moveNext: true });
      this.setState({ validated3: false });
    }

    this.setState({ validated3: true });
  };
  AddContactperson = () => {
    if (
      this.state.cp_first_name != null &&
      this.state.cp_last_name != null &&
      this.state.cp_email != null &&
      this.state.cp_phone != null &&
      this.state.cp_first_name != "" &&
      this.state.cp_last_name != "" &&
      this.state.cp_email != "" &&
      this.state.cp_phone != ""
    ) {
      this.setState({
        contact_persons: [
          ...this.state.contact_persons,
          {
            salution: this.state.cp_salution,
            first_name: this.state.cp_first_name,
            last_name: this.state.cp_last_name,
            email: this.state.cp_email,
            phone: this.state.cp_phone,
          },
        ],
        cp_first_name: null,
        cp_last_name: null,
        cp_email: null,
        cp_phone: null,
      });
    }
  };
  deleteContact = (index) => {
    let contact_persons = this.state.contact_persons;
    contact_persons.splice(index, 1);
    this.setState({ contact_persons: contact_persons });
  };

  render() {
    const {
      moveNext,
      validated1,
      validated2,
      validated3,
      validated4,
      Taxable,
      formData,
      contact_name,
      company_name,
      email,
      mobile,
      tax_id,
      tax_name,
      tax_percentage,
      place_of_contact,
      payment_terms_label,
      gst_no,
      gst_treatment,
      is_linked_with_zohocrm,
      website,
      payment_terms,
      currency_code,
      outstanding_receivable_amount,
      unused_credits_receivable_amount,
      facebook,
      twitter,
      b_attention,
      b_address,
      b_street2,
      b_state_code,
      b_city,
      b_state,
      b_zip,
      b_country,
      b_fax,
      b_phone,
      s_attention,
      s_address,
      s_street2,
      s_state_code,
      s_city,
      s_state,
      s_zip,
      s_country,
      s_fax,
      s_phone,
      samebilling,
      contact_persons,
      cp_salution,
      cp_first_name,
      cp_last_name,
      cp_email,
      cp_phone,
    } = this.state;

    return (
      <Modal
        {...this.props}
        show={this.props.toggleAddEditModal}
        onHide={this.toggleModal}
        backdrop="static"
        keyboard={false}
        size="xl"
        className="rounded modal-dialog-scrollable"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Contact
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <div id="stepper1" class="bs-stepper">
              <div class="bs-stepper-header">
                <div class="step" data-target="#test-l-1">
                  <button class="step-trigger">
                    <span class="bs-stepper-circle">1</span>
                    <span class="bs-stepper-label">Contact Info</span>
                  </button>
                </div>
                <div class="line"></div>
                <div class="step" data-target="#test-l-2">
                  <button class="step-trigger">
                    <span class="bs-stepper-circle">2</span>
                    <span class="bs-stepper-label">Payment Info</span>
                  </button>
                </div>
                <div class="line"></div>
                <div class="step" data-target="#test-l-3">
                  <button class="step-trigger">
                    <span class="bs-stepper-circle">3</span>
                    <span class="bs-stepper-label">Address Info</span>
                  </button>
                </div>
                <div class="line"></div>
                <div class="step" data-target="#test-l-4">
                  <button class="step-trigger">
                    <span class="bs-stepper-circle">4</span>
                    <span class="bs-stepper-label">Contact Persons</span>
                  </button>
                </div>
              </div>
              <div class="bs-stepper-content pb-0">
                <Form
                  noValidate
                  validated={this.state.validated1}
                  onSubmit={this.handleSubmit1}
                >
                  <div id="test-l-1" class="content">
                    <Row>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Contact Name"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            value={contact_name || ""}
                            onChange={(e) =>
                              this.setState({ contact_name: e.target.value })
                            }
                            placeholder="Enter Contact Name"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Company Name"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            value={company_name || ""}
                            onChange={(e) =>
                              this.setState({ company_name: e.target.value })
                            }
                            placeholder="Enter Company Name"
                            required
                          />
                        </FloatingLabel>
                      </Col>

                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email address"
                          className="mb-3"
                        >
                          <Form.Control
                            type="email"
                            value={email || ""}
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                            placeholder="name@example.com"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Mobile Number"
                          className="mb-3"
                        >
                          <Form.Control
                            type="number"
                            value={mobile || ""}
                            onChange={(e) =>
                              this.setState({ mobile: e.target.value })
                            }
                            placeholder="Enter Mobile Number"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingSelect"
                          label="Contact Type"
                        >
                          <Form.Select
                            aria-label="Floating label select example"
                            onChange={(e) =>
                              this.setState({ contact_type: e.target.value })
                            }
                          >
                            <option value="customer">Customer</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>

                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Website"
                          className="mb-3"
                        >
                          <Form.Control
                            value={website || ""}
                            onChange={(e) =>
                              this.setState({ website: e.target.value })
                            }
                            type="text"
                            placeholder="website"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Facebook"
                          className="mb-3"
                        >
                          <Form.Control
                            value={facebook || ""}
                            onChange={(e) =>
                              this.setState({ facebook: e.target.value })
                            }
                            type="text"
                            placeholder="Payment Terms"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Twitter"
                          className="mb-3"
                        >
                          <Form.Control
                            value={twitter || ""}
                            onChange={(e) =>
                              this.setState({
                                twitter: e.target.value,
                              })
                            }
                            type="text"
                            placeholder="Payment Terms Label"
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>

                    <Modal.Footer>
                      <Button type="submit" variant="primary">
                        Next
                      </Button>
                    </Modal.Footer>
                  </div>
                </Form>
                <div id="test-l-2" class="content">
                  <Form
                    noValidate
                    validated={this.state.validated2}
                    onSubmit={this.handleSubmit2}
                  >
                    <Row>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Taxable"
                          className="mb-3"
                        >
                          <Form.Check
                            value={Taxable || ""}
                            onChange={(e) => {
                              this.setState({ Taxable: e.target.checked });
                            }}
                            className="form-control"
                            type="checkbox"
                            id="custom-switch"
                          />
                        </FloatingLabel>
                      </Col>
                      {Taxable && (
                        <>
                          <Col md={6} lg={4}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Tax ID"
                              className="mb-3"
                            >
                              <Form.Control
                                value={tax_id || ""}
                                onChange={(e) =>
                                  this.setState({ tax_id: e.target.value })
                                }
                                type="text"
                                placeholder="Enter Tax ID"
                                required={Taxable}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={6} lg={4}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Tax Name"
                              className="mb-3"
                            >
                              <Form.Control
                                value={tax_name || ""}
                                onChange={(e) =>
                                  this.setState({ tax_name: e.target.value })
                                }
                                type="text"
                                placeholder="Enter Tax Name"
                                required={Taxable}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={6} lg={4}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Tax Percentage"
                              className="mb-3"
                            >
                              <Form.Control
                                value={tax_percentage || ""}
                                onChange={(e) =>
                                  this.setState({
                                    tax_percentage: e.target.value,
                                  })
                                }
                                type="number"
                                placeholder="Enter Tax Percentage"
                                required={Taxable}
                              />
                            </FloatingLabel>
                          </Col>
                        </>
                      )}
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Place of Contact"
                          className="mb-3"
                        >
                          <Form.Control
                            value={place_of_contact || ""}
                            onChange={(e) =>
                              this.setState({
                                place_of_contact: e.target.value,
                              })
                            }
                            type="text"
                            placeholder="Place of Contact"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="GST Number"
                          className="mb-3"
                        >
                          <Form.Control
                            value={gst_no || ""}
                            onChange={(e) =>
                              this.setState({ gst_no: e.target.value })
                            }
                            type="text"
                            placeholder="GST Number"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="GST Treatment"
                          className="mb-3"
                        >
                          <Form.Control
                            value={gst_treatment || ""}
                            onChange={(e) =>
                              this.setState({ gst_treatment: e.target.value })
                            }
                            type="text"
                            placeholder="GST Treatment"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Payment Terms"
                          className="mb-3"
                        >
                          <Form.Control
                            value={payment_terms || ""}
                            onChange={(e) =>
                              this.setState({ payment_terms: e.target.value })
                            }
                            type="text"
                            placeholder="Payment Terms"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Payment Terms Label"
                          className="mb-3"
                        >
                          <Form.Control
                            value={payment_terms_label || ""}
                            onChange={(e) =>
                              this.setState({
                                payment_terms_label: e.target.value,
                              })
                            }
                            type="text"
                            placeholder="Payment Terms Label"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6} lg={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Link with Zoho CRM"
                          className="mb-3"
                        >
                          <Form.Check
                            value={is_linked_with_zohocrm || ""}
                            onChange={(e) => {
                              this.setState({
                                is_linked_with_zohocrm: e.target.checked,
                              });
                            }}
                            className="form-control"
                            type="checkbox"
                            id="custom-switch"
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Modal.Footer>
                      <Button
                        variant="dark"
                        onClick={() => this.stepper.previous()}
                      >
                        Previous
                      </Button>
                      <Button type="submit" variant="primary">
                        Next
                      </Button>
                    </Modal.Footer>
                  </Form>
                </div>
                <div id="test-l-3" class="content">
                  <Form
                    noValidate
                    validated={this.state.validated3}
                    onSubmit={this.handleSubmit3}
                  >
                    <Row className="mt-2">
                      <Col md={6}>
                        <Row>
                          <Col md={12}>
                            <h5>Billing Address</h5>
                          </Col>
                          <Col md={12}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Name"
                              className="mb-3"
                            >
                              <Form.Control
                                value={b_attention || ""}
                                onChange={(e) =>
                                  this.setState({
                                    b_attention: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder="Attention"
                                required
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={12}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Address"
                              className="mb-3"
                            >
                              <Form.Control
                                value={b_address || ""}
                                onChange={(e) =>
                                  this.setState({
                                    b_address: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                required
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={12}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Street"
                              className="mb-3"
                            >
                              <Form.Control
                                value={b_street2 || ""}
                                onChange={(e) =>
                                  this.setState({
                                    b_street2: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                required
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={4}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="State Code"
                              className="mb-3"
                            >
                              <Form.Control
                                value={b_state_code || ""}
                                onChange={(e) =>
                                  this.setState({
                                    b_state_code: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                required
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={8}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="City"
                              className="mb-3"
                            >
                              <Form.Control
                                value={b_city || ""}
                                onChange={(e) =>
                                  this.setState({
                                    b_city: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                required
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={6}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Zip Code"
                              className="mb-3"
                            >
                              <Form.Control
                                value={b_zip || ""}
                                onChange={(e) =>
                                  this.setState({
                                    b_zip: e.target.value,
                                  })
                                }
                                type="number"
                                placeholder=""
                                required
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={6}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Country"
                              className="mb-3"
                            >
                              <Form.Control
                                value={b_country || ""}
                                onChange={(e) =>
                                  this.setState({
                                    b_country: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                required
                              />
                            </FloatingLabel>
                          </Col>

                          <Col md={6}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Phone"
                              className="mb-3"
                            >
                              <Form.Control
                                value={b_phone || ""}
                                onChange={(e) =>
                                  this.setState({
                                    b_phone: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                required
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={6}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Fax"
                              className="mb-3"
                            >
                              <Form.Control
                                value={b_fax || ""}
                                onChange={(e) =>
                                  this.setState({
                                    b_fax: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                required
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col
                            md={12}
                            className="d-flex align-items-center justify-content-between"
                          >
                            <h5>Shipping Address</h5>
                            <Form.Check
                              type="checkbox"
                              value={samebilling || ""}
                              label="Same as Billing Address"
                              onChange={(e) =>
                                this.setState({ samebilling: e.target.checked })
                              }
                            ></Form.Check>
                          </Col>
                          <Col md={12}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Name"
                              className="mb-3"
                            >
                              <Form.Control
                                value={
                                  samebilling ? b_attention : s_attention || ""
                                }
                                onChange={(e) =>
                                  this.setState({
                                    s_attention: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder="Attention"
                                disabled={samebilling}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={12}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Address"
                              className="mb-3"
                            >
                              <Form.Control
                                value={
                                  samebilling ? b_address : s_address || ""
                                }
                                onChange={(e) =>
                                  this.setState({
                                    s_address: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                disabled={samebilling}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={12}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Street"
                              className="mb-3"
                            >
                              <Form.Control
                                value={
                                  samebilling ? b_street2 : s_street2 || ""
                                }
                                onChange={(e) =>
                                  this.setState({
                                    s_street2: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                disabled={samebilling}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={4}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="State Code"
                              className="mb-3"
                            >
                              <Form.Control
                                value={
                                  samebilling
                                    ? b_state_code
                                    : s_state_code || ""
                                }
                                onChange={(e) =>
                                  this.setState({
                                    s_state_code: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                disabled={samebilling}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={8}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="City"
                              className="mb-3"
                            >
                              <Form.Control
                                value={samebilling ? b_city : s_city || ""}
                                onChange={(e) =>
                                  this.setState({
                                    s_city: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                disabled={samebilling}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={6}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Zip Code"
                              className="mb-3"
                            >
                              <Form.Control
                                value={samebilling ? b_zip : s_zip || ""}
                                onChange={(e) =>
                                  this.setState({
                                    s_zip: e.target.value,
                                  })
                                }
                                type="number"
                                placeholder=""
                                disabled={samebilling}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={6}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Country"
                              className="mb-3"
                            >
                              <Form.Control
                                value={
                                  samebilling ? b_country : s_country || ""
                                }
                                onChange={(e) =>
                                  this.setState({
                                    s_country: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                disabled={samebilling}
                              />
                            </FloatingLabel>
                          </Col>

                          <Col md={6}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Phone"
                              className="mb-3"
                            >
                              <Form.Control
                                value={samebilling ? b_phone : s_phone || ""}
                                onChange={(e) =>
                                  this.setState({
                                    s_phone: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                disabled={samebilling}
                              />
                            </FloatingLabel>
                          </Col>
                          <Col md={6}>
                            <FloatingLabel
                              controlId="floatingInput"
                              label="Fax"
                              className="mb-3"
                            >
                              <Form.Control
                                value={samebilling ? b_fax : s_fax || ""}
                                onChange={(e) =>
                                  this.setState({
                                    s_fax: e.target.value,
                                  })
                                }
                                type="text"
                                placeholder=""
                                disabled={samebilling}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Modal.Footer>
                      <Button
                        variant="dark"
                        onClick={() => this.stepper.previous()}
                      >
                        Previous
                      </Button>
                      <Button type="submit" variant="primary">
                        Next
                      </Button>
                    </Modal.Footer>
                  </Form>
                </div>
                <div id="test-l-4" class="content text-center">
                  <Form
                    noValidate
                    validated={this.state.validated4}
                    onSubmit={this.handleSubmit4}
                  >
                    <Row>
                      <Col md={12}>
                        {contact_persons &&
                          contact_persons.length > 0 &&
                          contact_persons.map((item, index) => {
                            return (
                              <Card
                                key={index + "testtt"}
                                className="rounded my-2 p-3"
                              >
                                <Row
                                  key={index}
                                  className="text-start align-items-center"
                                >
                                  <Col md={4}>
                                    <small className="text-muted">
                                      Contact Person
                                    </small>
                                    <h6>
                                      {item.salution}.{item.first_name}
                                      {item.last_name}
                                    </h6>
                                  </Col>
                                  <Col md={3}>
                                    <small className="text-muted">Email</small>
                                    <h6>{item.email}</h6>
                                  </Col>
                                  <Col md={3}>
                                    <small className="text-muted">Phone</small>
                                    <h6>{item.phone}</h6>
                                  </Col>
                                  <Col md={2}>
                                    <Button
                                      onClick={() => this.deleteContact(index)}
                                      variant="danger"
                                      size="sm"
                                    >
                                      <X />
                                    </Button>
                                  </Col>
                                </Row>
                              </Card>
                            );
                          })}
                      </Col>
                      <Col md={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Salution"
                          className="mb-3"
                        >
                          <Form.Select
                            defaultValue={cp_salution || ""}
                            aria-label="Floating label select example"
                            onChange={(e) =>
                              this.setState({ cp_salution: e.target.value })
                            }
                          >
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col md={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="First Name"
                          className="mb-3"
                        >
                          <Form.Control
                            value={cp_first_name || ""}
                            onChange={(e) =>
                              this.setState({ cp_first_name: e.target.value })
                            }
                            type="text"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Last Name"
                          className="mb-3"
                        >
                          <Form.Control
                            value={cp_last_name || ""}
                            onChange={(e) =>
                              this.setState({ cp_last_name: e.target.value })
                            }
                            type="text"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email"
                          className="mb-3"
                        >
                          <Form.Control
                            value={cp_email || ""}
                            onChange={(e) =>
                              this.setState({ cp_email: e.target.value })
                            }
                            type="email"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={4}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Phone"
                          className="mb-3"
                        >
                          <Form.Control
                            value={cp_phone || ""}
                            onChange={(e) =>
                              this.setState({ cp_phone: e.target.value })
                            }
                            type="phone"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={4} className="text-start mb-auto">
                        <Button
                          className="btn-block"
                          size="lg"
                          variant="success"
                          onClick={() => {
                            this.AddContactperson();
                          }}
                        >
                          <Plus />
                        </Button>
                      </Col>
                    </Row>
                    <Modal.Footer>
                      <Button
                        variant="dark"
                        onClick={() => this.stepper.previous()}
                      >
                        Previous
                      </Button>
                      {this.props.data === null ? (
                        <Button
                          type="submit"
                          variant="primary"
                          onClick={() => this.addContactData()}
                        >
                          Submit
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          variant="primary"
                          onClick={() => this.updateContactData()}
                        >
                          update Contact
                        </Button>
                      )}
                    </Modal.Footer>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default ContactAddEditModal;
