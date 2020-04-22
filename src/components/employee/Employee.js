import React, { useState, useContext } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"

export default ({ employee, location }) => {
    const { releaseEmployee } = useContext(EmployeeContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const chosenEmployeeId = employee.id

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <Button onClick={toggle}>Details</Button>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    {employee.name}
                </ModalHeader>
                <ModalBody>
                    <div className="employee__location">
                        <label className="label--employee">Work Location:</label> {location.name}
                    </div>
                    <div className="employee__address">
                        <label className="label--employee">Home Address:</label> {employee.address}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn--release"
                        onClick={() => {
                            releaseEmployee(chosenEmployeeId)
                                .then(toggle)
                        }}
                    >Release Employee</Button>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}