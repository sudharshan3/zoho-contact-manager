import React, { useState } from "react";
import {
  Button,
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

class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step here",
    };
  }
  isValidated() {
    return true;
  }

  render() {
    const {
      validated,
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
    } = this.state;
    return (
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
              onChange={(e) => this.setState({ contact_name: e.target.value })}
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
              onChange={(e) => this.setState({ company_name: e.target.value })}
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
              onChange={(e) => this.setState({ email: e.target.value })}
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
              onChange={(e) => this.setState({ mobile: e.target.value })}
              placeholder="Enter Mobile Number"
              required
            />
          </FloatingLabel>
        </Col>
        <Col md={6} lg={4}>
          <FloatingLabel controlId="floatingSelect" label="Contact Type">
            <Form.Select
              aria-label="Floating label select example"
              onChange={(e) => this.setState({ contact_type: e.target.value })}
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
              onChange={(e) => this.setState({ website: e.target.value })}
              type="text"
              placeholder="website"
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
              onChange={(e) => this.setState({ payment_terms: e.target.value })}
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
                this.setState({ payment_terms_label: e.target.value })
              }
              type="text"
              placeholder="Payment Terms Label"
              required
            />
          </FloatingLabel>
        </Col>
      </Row>
    );
  }
}
class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondStep: "second step here",
    };
  }
  isValidated() {
    // do some validations
    // decide if you will
    return true;
    // or you will
    // return false;
  }
  render() {
    const {
      validated,
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
    } = this.state;
    return (
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
                  onChange={(e) => this.setState({ tax_id: e.target.value })}
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
                  onChange={(e) => this.setState({ tax_name: e.target.value })}
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
                    this.setState({ tax_percentage: e.target.value })
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
                this.setState({ place_of_contact: e.target.value })
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
              onChange={(e) => this.setState({ gst_no: e.target.value })}
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
              onChange={(e) => this.setState({ gst_treatment: e.target.value })}
              type="text"
              placeholder="GST Treatment"
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
                this.setState({ is_linked_with_zohocrm: e.target.checked });
              }}
              className="form-control"
              type="checkbox"
              id="custom-switch"
            />
          </FloatingLabel>
        </Col>
      </Row>
    );
  }
}
class ThirdStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thirdStep: "third step here",
    };
  }
  render() {
    return <div>Hey from Third</div>;
  }
}

var steps = [
  // this step hasn't got a isValidated() function, so it will be considered to be true
  {
    stepName: "First",
    style: {width:'350px'},
    stepIcon: "tim-icons icon-single-02",
    component: FirstStep,
    active: true,
  },
  // this step will be validated to false
  { stepName: "Second", component: SecondStep },
  // this step will never be reachable because of the seconds isValidated() steps function that will always return false
  { stepName: "Third", component: ThirdStep },
];

class ContactAddEditModal extends React.Component {
  finishButtonClick(allStates) {
    console.log(allStates);
  }
  state = {
    validated: false,
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
  };
  toggleModal = () => {
    this.props.closeAddEditModal();
  };

  componentDidMount = () => {
    if (this.props.toggleAddEditModal) {
      this.setState({
        validated: false,
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
      });
    }
  };

  addContactData = () => {
    if (this.state.validated) {
      let data = {
        contact_name: this.state.contact_name,
        company_name: this.state.company_name,
        email: this.state.email,
        mobile: this.state.mobile,
        is_taxable: this.state.Taxable,
        tax_id: this.state.tax_id,
        tax_name: this.state.tax_name,
        tax_percentage: this.state.tax_percentage,
        place_of_contact: this.state.place_of_contact,
        gst_no: this.state.gst_no,
        gst_treatment: this.state.gst_treatment,
        is_linked_with_zohocrm: this.state.is_linked_with_zohocrm,
        website: this.state.website,
        payment_terms: this.state.payment_terms,
        payment_terms_label: this.state.payment_terms_label,
        currency_code: this.state.currency_code,
        outstanding_receivable_amount: this.state.outstanding_receivable_amount,
        unused_credits_receivable_amount:
          this.state.unused_credits_receivable_amount,
      };
      console.log(data);
    }
  };
  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });
  };
  render() {
    console.log(steps);
    const {
      validated,
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
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Modal.Body>
            <Container fluid style={{ marginTop: "15px" }}>
              <Row>
                <Col xs={12} className="mr-auto ml-auto">
                  <ReactWizard
                    steps={steps}
                    navSteps
                    headerTextCenter
                    validate
                    color="blue"
                    finishButtonClick={this.finishButtonClick}
                  />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.toggleModal}>
              Close
            </Button>
            <Button
              type="submit"
              variant="primary"
              onClick={() => {
                this.addContactData();
              }}
            >
              Add Contact
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
export default ContactAddEditModal;
