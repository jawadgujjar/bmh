import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AppModal = ({ show, onHide, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Unsaved Changes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You have unsaved changes. Are you sure you want to leave?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Stay
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Leave
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AppModal;
