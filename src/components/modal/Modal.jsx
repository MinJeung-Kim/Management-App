import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const DetailModal = ({ show, setShow }) => {
  <Modal
    size="lg"
    show={show}
    onHide={() => setShow(false)}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>...</Modal.Body>
  </Modal>;
};
export default DetailModal;
