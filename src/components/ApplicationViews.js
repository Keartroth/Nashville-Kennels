import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import AnimalForm from "./animal/AnimalForm"
import AnimalList from "./animal/AnimalList"
import CustomerList from "./customer/CustomerList"
import EmployeeList from "./employee/EmployeeList"
import EmployeeForm from "./employee/EmployeeForm"

export default (props) => {
    return (
        <>
            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route exact path="/">
                            <LocationList />
                        </Route>
                    </AnimalProvider>
                </EmployeeProvider>
            </LocationProvider>

            <AnimalProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render={
                            props => <AnimalList {...props} />
                        } />
                        <Route exact path="/animals/create" render={
                        props => <AnimalForm {...props} />
                        } />
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
                        props => <EmployeeForm {...props} />
                    } />
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}