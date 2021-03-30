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
                <a href="https://customer.gtsgold168.com/register?agent=ufa">
                    <Image src="https://sv1.picz.in.th/images/2021/03/25/DuKqw1.jpg"alt="คาสิโนออนไลน์,แทงบอล,ยิงปลา" className="border border-white rounded" />
                </a>   
                </Modal.Body>
            </Modal>
        </>
    );
}
