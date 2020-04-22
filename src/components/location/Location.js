import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import "./Location.css"

export default (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <section className="location">
                <h3 className="location__name">{props.location.name}</h3>
                <address className="location__address">{props.location.address}</address>
                <div className="location__animalTotal">
                    <label className="label--location">Total Animals:</label> {props.animalArray.length}
                </div>
                <div className="location__employeeTotal">
                    <label className="label--location">Total Employees:</label> {props.employeeArray.length}
                </div>
                <Button onClick={toggle}>Details</Button>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    {props.location.name}
                </ModalHeader>
                <ModalBody>
                    <div className="location__animalList">
                        <label className="label--location">Animals:</label>
                        {
                            props.animalArray.map(animal => <div key={animal.id}>{animal.name}</div>)
                        }
                    </div>
                    <div className="location__employeeList">
                        <label className="label--location">Employees:</label>
                        {
                            props.employeeArray.map(employee => <div key={employee.id}>{employee.name}</div>)
                        }
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}