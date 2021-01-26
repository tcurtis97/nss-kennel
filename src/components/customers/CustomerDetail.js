import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
  const { getCustomerById, deleteCustomer } = useContext(CustomerContext)

	const [customer, setCustomer] = useState({})

	const {customerId} = useParams();
	const history = useHistory();

  const customerDelete = () => {
    customerDelete(customer.id)
      .then(() => {
        history.push("/customers")
      })
  }

  useEffect(() => {
    console.log("useEffect", customerId)
    getCustomerById(customerId)
    .then((response) => {
      setCustomer(response)
    })
    }, [])

  return (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__address">Address: {customer.address}</div>
        <button onClick={customerDelete}>Delete Customer</button>
    </section>
  )
}