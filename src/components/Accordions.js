import React from 'react';
import { Accordion } from 'react-bootstrap';
import {MdOutlineOndemandVideo} from 'react-icons/md';

function Accordions(props) {
  return (
    <>
      <Accordion className="test">
        <Accordion.Item eventKey="0" className="test">
          <Accordion.Header className="test">Show more</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li><MdOutlineOndemandVideo /><span>Video</span></li>
              <li><MdOutlineOndemandVideo /><span>Video</span></li>
              <li><MdOutlineOndemandVideo /><span>Video</span></li>
              <li><MdOutlineOndemandVideo /><span>Video</span></li>
              <li><MdOutlineOndemandVideo /><span>Video</span></li>
              </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Accordions;