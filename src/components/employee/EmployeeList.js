import React, { useContext } from "react"
import { Button } from 'reactstrap'
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import Employee from "./Employee"
import "./Employee.css"

export default (props) => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        <article className="employees">
            <h1>Employees</h1>
            <Button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </Button>
            <section className="employeeList">
                {
                    employees.map(employee => {
                        const clinic = locations.find(l => l.id === employee.locationId)

                        return <Employee key={employee.id}
                            location={clinic}
                            employee={employee} />
                    })
                }
            </section>
        </article>
    )
}