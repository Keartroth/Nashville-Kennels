import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import "./Employee.css"

export default ({ employee, location }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <button onClick={toggle}>Details</button>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    {employee.name}
                </ModalHeader>
                <ModalBody>
                    <div className="animal__location">
                        <label className="label--employee">Work Location:</label> {location.name}
                    </div>
                    <div className="employee__address">
                        <label className="label--employee">Home Address:</label> {employee.address}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}