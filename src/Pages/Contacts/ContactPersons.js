import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Row,
  UncontrolledTooltip,
} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import {
  CreditCard,
  Facebook,
  Link,
  Mail,
  Map,
  MapPin,
  Phone,
  Printer,
  Trash,
  Twitter,
  User,
} from "react-feather";
import ContactPersonDelete from "./ContactPersonDelete";
// import {  UncontrolledTooltip } from 'reactstrap';

const ContactPersons = (props) => {
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  const [allcontactPersons,setAllcontactPerson]=useState(props.data.contact_persons)

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
  };
  const columns = [
    {
      dataField: "salutation",
      text: "salutation",
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tabledivinner">
          <p>{row.salutation}</p>
        </div>
      ),
    },
    {
      dataField: "first_name",
      text: "first name",
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tabledivinner">
          <p>{row.first_name}</p>
        </div>
      ),
    },
    {
      dataField: "last_name",
      text: "last name",
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tabledivinner">
          <p>{row.last_name}</p>
        </div>
      ),
    },
    {
      dataField: "email",
      text: "email",
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tabledivinner">
          <p>{row.email}</p>
        </div>
      ),
    },
    {
      dataField: "phone",
      text: "phone",
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tabledivinner">
          <p>{row.phone}</p>
        </div>
      ),
    },
    {
      dataField: "mobile",
      text: "mobile",
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tabledivinner">
          <p>{row.mobile}</p>
        </div>
      ),
    },
  ];
  const closeDeleteModal = () => {
    setToggleDeleteModal(false);
  };
  const handleDeleteModal = (data) => {
    setDeleteData(data);
    setToggleDeleteModal(true);
  };
  return (
    <>
      <Row className="mt-2 mb-5">
        {props.data&&props.data.contact_persons&& props.data.contact_persons.length > 0 && props.data.contact_persons.map((item, index) => {
          return (
            <Col md={6}>
              <div className="p-3 rounded bg-light d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-primary">
                    <strong>
                      {item.salutation} {item.first_name} {item.last_name}
                    </strong>
                  </h6>

                  <p className="mt-2">
                    <Mail className="text-muterd me-2" size={15} />
                    Email: {item.email}
                  </p>
                  <p className="mt-2">
                    <Phone className="text-muterd me-2" size={15} />
                    Phone: {item.phone}
                  </p>
                </div>

                <Button
                  variant="danger"
                  onClick={() => {
                    handleDeleteModal(item);
                  }}
                >
                  <Trash />
                </Button>
              </div>
            </Col>
          );
        })}
      </Row>
      {toggleDeleteModal && (
        <ContactPersonDelete
          setVisible={setVisible}
          data={deleteData}
          setAllcontactPerson={setAllcontactPerson}
          setDeleteData={setDeleteData}
          setData={props.setData}
          contactdetails={props.data}
          closeDeleteModal={closeDeleteModal}
          toggleDeleteModal={toggleDeleteModal}
        />
      )}
    </>
  );
};

export default ContactPersons;
