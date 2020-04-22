import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export default props => {
    const { releaseAnimal } = useContext(AnimalContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const chosenAnimalId = props.animal.id

    return (
        <>
            <section className="animal">
                <h3 className="animal__name">{props.animal.name}</h3>
                <Button onClick={toggle}>Details</Button>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    {props.animal.name}
                </ModalHeader>
                <ModalBody>
                    <div className="animal__breed">
                        <label className="label--animal">Breed:</label> {props.animal.breed}
                    </div>
                    <div className="animal__location">
                        <label className="label--animal">Location:</label> {props.location.name}
                    </div>
                    <div className="animal__owner">
                        <label className="label--animal">Customer:</label> {props.customer.name}
                    </div>
                    <div className="animal__treatments">
                        <label className="label--animal">Treatments:</label> {props.animal.treatment}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => {
                        props.history.push(`/animals/edit/${props.animal.id}`)
                    }}>Edit</Button>
                    <Button className="btn--release"
                        onClick={() => {
                            releaseAnimal(chosenAnimalId)
                                .then(toggle)
                        }}
                    >Release</Button>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}