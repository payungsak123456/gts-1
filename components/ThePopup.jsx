import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
export default function ThePopup() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(false);
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="d-flex justify-content-center">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Image src="assets/images/popup.png" />
                </Modal.Body>
            </Modal>
        </>
    );
}
