import React, { useContext, useRef } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Animal.css"

export default props => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const animalName = useRef("")
    const animalBreed = useRef("")
    const appointmentLocation = useRef(0)
    const petOwner = parseInt(localStorage.getItem("kennel_customer"))

    const constructNewAppointment = () => {
        const locationId = parseInt(appointmentLocation.current.value)
    
        if (locationId === 0 || animalName === "") {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: animalName.current.value,
                breed: animalBreed.current.value,
                customerId: petOwner,
                locationId: locationId
            })
            props.history.push("/animals")
        }
    }

    return (
        <form className="appointmentForm">
            <h2 className="appointmentForm__title">New Appointment</h2>
            <div className="form-group">
                <label htmlFor="animalName">Pet's name</label>
                <input
                    type="text"
                    id="animalName"
                    ref={animalName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Pet's name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="animalBreed">Breed</label>
                <input
                    type="text"
                    id="animalBreed"
                    ref={animalBreed}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="breed"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Appointment location</label>
                <select
                    defaultValue=""
                    name="location"
                    ref={appointmentLocation}
                    id="appointmentLocation"
                    className="form-control"
                >
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewAppointment()
                    }
                }
                className="btn btn-primary">
                Save Appointment
            </button>
        </form>
    )
}