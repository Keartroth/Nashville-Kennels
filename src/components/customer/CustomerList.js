import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customer.css"

export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <article className="customers">
            <h1>Customers</h1>
            <section className="customerList">
                {
                    customers.map(cust => <Customer key={cust.id} customer={cust} />)
                }
            </section>
        </article>
    )
}