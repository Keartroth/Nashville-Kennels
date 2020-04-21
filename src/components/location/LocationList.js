import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Location.css"
import { AnimalContext } from "../animal/AnimalProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"

export default () => {
    const { locations } = useContext(LocationContext)
    const { employees } = useContext(EmployeeContext)
    const { animals } = useContext(AnimalContext)

    return (
        <article className="locations">
            <h1>Locations</h1>
            <section className="locationList">
                {
                    locations.map(loc => {
                        const locationEmployees = employees.filter(e => e.locationId === loc.id)
                        const locationAnimals = animals.filter(a => a.locationId === loc.id)

                        return <Location key={loc.id}
                            location={loc}
                            employeeArray={locationEmployees}
                            animalArray={locationAnimals} />
                    })
                }
            </section>
        </article>
    )
}