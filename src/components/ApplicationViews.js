import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import CustomerList from "./customer/CustomerList"
import EmployeeList from "./employee/EmployeeList"
import EmployeeForm from "./employee/EmployeeForm"

export default (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <LocationProvider>
                    <CustomerProvider>
                        <Route path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the customers list when http://localhost:3000/customers */}
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    {/* Render the employee list when http://localhost:3000/employees */}
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />
                    {/* Render the add employee form when http://localhost:3000/employees/create */}
                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props}/>
                    } />
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}