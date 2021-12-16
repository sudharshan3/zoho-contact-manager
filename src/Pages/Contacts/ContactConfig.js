import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import { useSpring, animated, useTransition, Spring } from "react-spring";
import { ChevronLeft, ChevronRight, Plus } from "react-feather";
import { ContactsData } from "./Data";
import defaultavatar from '../../assets/images/avatar-blue.png'
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  ColumnToggle,
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {
  selectFilter,
  textFilter,
} from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import ContactDetails from "./ContactDetails";
import SearchBar from "react-bootstrap-table2-toolkit/lib/src/search/SearchBar";

const ContactConfig = () => {
  const [layout, setLayout] = useState(false);
  const [visible, setVisible] = useState(false);
  const [change, setChange] = useState(0);
  const [data, setData] = useState("");
  const transition = useTransition(visible, {
    from: { transform: "translateX(100%)", opacity: 0 },
    enter: { transform: "translateX(0%)", opacity: 1 },
    leave: { transform: "translateX(100%)", opacity: 0 },
  });
  const [contactListData, setContactListData] = useState([]);
  useEffect(() => {
    fetch("/api/contacts/list")
      .then((res) => res.json())
      .then((data) => {
        setContactListData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      setData(row);
      setVisible(true);
      setLayout(true);
      setChange(change + 1);
    },
  };
  const { ToggleList } = ColumnToggle;

  const columns = [
    {
      dataField: "contact_id",
      text: "S.No",
      hidden: layout ? true : false,
      sort: true,
      headerClasses: `${layout ? "d-none" : ""}`,
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tablediv">
          <p className="ps-3">{rowIndex + 1}</p>
        </div>
      ),
    },
    {
      dataField: "contact_name",
      text: "Contact Name",
      headerClasses: `${layout ? "d-none" : ""} text-start`,
      sort: true,

      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tablediv d-flex justify-content-start align-item-center">
          <img src={row.avatar?row.avatar:defaultavatar} className="avatar-sm me-2" alt="contact" />
          <div className="d-flex flex-column justify-content-around">
            {row.contact_name} <br />
            {layout ? <small>{row.mobile}</small> : null}
          </div>
        </div>
      ),
    },
    {
      dataField: "company_name",
      text: "Company Name",
      headerClasses: `${layout ? "d-none" : ""}`,
      sort: true,
      hidden: layout ? true : false,
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tablediv">
          <p>{row.company_name}</p>
        </div>
      ),
    },
    {
      dataField: "email",
      text: "Email ID",
      headerClasses: `${layout ? "d-none" : ""}`,
      sort: true,
      hidden: layout ? true : false,
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tablediv">
          <p>{row.email}</p>
        </div>
      ),
    },
    {
      dataField: "mobile",
      text: "Mobile Number",
      headerClasses: `${layout ? "d-none" : ""}`,
      sort: true,
      hidden: layout ? true : false,
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tablediv">
          <p>{row.mobile}</p>
        </div>
      ),
    },
    {
      dataField: "status",
      text: "Status",
      headerClasses: `${layout ? "d-none" : ""}`,
      sort: true,
      hidden: layout ? true : false,
      formatter: (cell, row, rowIndex, formatExtraData) => (
        <div className="tablediv">
          <Badge bg={row.status?'success':'danger'}>{row.status?'Active':'Inactive'}</Badge>
        </div>
      ),
    },
  ];

  return (
    <React.Fragment>
    
      <Row className="gx-5 h-100 mt-3">
        <Col className="g-md-2 position-relative h-100 d-none d-md-block" lg={layout ? 4 : 12}>
          <Spring
            from={{ transform: "translateY(100%)", opacity: 0 }}
            to={{ transform: "translateY(0%)", opacity: 1 }}
          >
            {(props) => (
              <animated.div style={props} className="h-100">
                <div className="bg-white rounded shadow pt-4 px-3 pb-2 h-100">
                  <Button className="addcontactbtn">
                    <Plus />
                  </Button>
                  {contactListData.contacts && contactListData.contacts.length > 0 && (
                    <Row className="mt-2  h-100">
                      <Col md={12} className=" h-100">
                        <ToolkitProvider
                          keyField="contact_id"
                          data={contactListData.contacts}
                          columns={columns}
                          columnToggle
                          search
                        >
                          {(props) => (
                            <div className="h-100">
                              <Row className="mb-2 h-20">
                                <Col md={6} className="text-start">
                                  <h3 className="mb-0">Contacts</h3>
                                </Col>
                                <Col md={6} className="text-end">
                                  {!layout && (
                                    <SearchBar
                                      {...props.searchProps}
                                      className="form-control w-100 formsearch"
                                      placeholder="Search Contact"
                                      style={{ width: "100%" }}
                                    />
                                  )}
                                </Col>
                              </Row>

                              {layout && (
                                <SearchBar
                                  {...props.searchProps}
                                  className="form-control w-100 formsearch"
                                  placeholder="Search Contact"
                                  style={{ width: "100%" }}
                                />
                              )}

                              <BootstrapTable
                                className="text-start "
                                {...props.baseProps}
                                keyField="contact_id"
                                bordered={false}
                                selectRow={selectRow}
                              />
                            </div>
                          )}
                        </ToolkitProvider>
                      </Col>
                    </Row>
                  )}
                </div>
              </animated.div>
            )}
          </Spring>
        </Col>

        <ContactDetails
          data={data}
          layout={layout}
          setLayout={setLayout}
          setVisible={setVisible}
          transition={transition}
          setChange={setChange}
          change={change}
        />

      
      </Row>
    </React.Fragment>
  );
};

export default ContactConfig;
