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
            {/* Render the location list when http://localhost:3000/customers */}
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
            {/* Render the location list when http://localhost:3000/employees */}
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                </LocationProvider>
            </ EmployeeProvider>
        </>
    )
}


