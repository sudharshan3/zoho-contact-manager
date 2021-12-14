import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ChevronRight, Crosshair, X } from "react-feather";
import { animated, useTransition } from "react-spring";

const ContactDetails = (props) => {
  const [loop, setLoop] = useState(0);
  const childTransition = useTransition(props.change, {
    from: { transform: "translateY(100%)", opacity: 0 },
    enter: { transform: "translateY(0%)", opacity: 1 },
    delay: 200,
  });

  useEffect(() => {
    setTimeout(()=>{
        props.setLayout(false);
       }, 200)
     

  }, [loop]);

  const changeVisibility = () => {
    props.setVisible(false);
    setLoop(!loop)
  }
  
  return (
    <>
      <Col className=" g-md-2 position-relative">
        {props.transition((style, item) =>
          item ? (
            <animated.div
              className="bg-white rounded shadow p-3 item h-100"
              style={style}
            >
              {childTransition((style, item)=>(
                item?<animated.div style={style}>
                   <img className="avatar pb-2" src={props.data.avatar} />
              <h1>{props.data.email}</h1>
                </animated.div>:''
              )) }
             
              <button
                className="btn-sm close-btn  btn-outline-secondary"
                onClick={()=>changeVisibility()}
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
