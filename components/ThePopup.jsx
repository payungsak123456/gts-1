import React, { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
export default function ThePopup() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(false);
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="d-flex justify-content-center the-popup">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Image src="https://sv1.picz.in.th/images/2021/01/29/lJmUX8.png"alt="คาสิโนออนไลน์,แทงบอล,ยิงปลา" className="border border-white rounded" />
                </Modal.Body>
            </Modal>
        </>
    );
}
