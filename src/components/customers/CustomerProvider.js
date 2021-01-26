import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CustomerContext = createContext()

// This component establishes what data can be used.
export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomer = customerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    const getCustomerById = (id) => {
        return fetch(`http://localhost:8088/customers/${id}`)
            .then(res => res.json())
    }
   
    const deleteCustomer = customerId => {
        return fetch(`http://localhost:8088/customers/${customerId}`, {
            method: "DELETE"
        })
            .then(getCustomers)
    }


    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer, getCustomerById, deleteCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}