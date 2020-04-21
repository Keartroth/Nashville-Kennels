import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import Animal from "./Animal"
import "./Animal.css"
import AnimalSearch from "./AnimalSearch"

export default (props) => {
    const { animals, searchTerm } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)
    const [ filteredAnimals, setFiltered ] = useState([])

    useEffect(() => {
        const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerm))
        setFiltered(subset)
    }, [searchTerm])

    useEffect(() => {
        setFiltered(animals)
    }, [animals])

    return (
        <article className="animals">
            <h1>Animals</h1>
            <AnimalSearch />
            <button onClick={() => props.history.push("/animals/create")}>
                Make Appointment
            </button>
            <section className="animalList">
                {
                    filteredAnimals.map(animal => {
                        const owner = customers.find(c => c.id === animal.customerId)
                        const clinic = locations.find(l => l.id === animal.locationId)

                        return <Animal key={animal.id}
                            location={clinic}
                            customer={owner}
                            animal={animal} />
                    })
                }
            </section>
        </article>
    )
}