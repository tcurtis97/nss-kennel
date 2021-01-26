import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"



export const EmployeeDetail = () => {
  const { getEmployeeById, deleteEmployee } = useContext(EmployeeContext)

	const [employee, setEmployees] = useState({})

	const {employeeId} = useParams();
	const history = useHistory();

  const employeeDelete = () => {
    deleteEmployee(employee.id)
      .then(() => {
        history.push("/employees")
      })
  }

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployees(response)
    })
    }, [])

  return (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{employee.location?.name}</div>
        <button onClick={employeeDelete}>Delete Employee</button>
    </section>
  )
}