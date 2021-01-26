import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
import { LocationList } from "./locations/LocationList"
import { EmployeeList } from "./employees/EmployeeList"
import { CustomerList } from "./customers/CustomerList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { LocationProvider } from "./locations/LocationProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerDetail } from "./customers/CustomerDetail"
import { EmployeeDetail } from "./employees/EmployeeDetail"
import { LocationDetail } from "./locations/LocationDetail"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
  <LocationProvider>
    <CustomerProvider>
      {/* Note the addition of "exact" now that we have an additional route with "/animals" in it below this Route: "/animals/create" */}
      <Route exact path="/animals">
        <AnimalList />
      </Route>

      <Route path="/animals/create">
        <AnimalForm />
      </Route>
    </CustomerProvider>
  </LocationProvider>
</AnimalProvider>

<AnimalProvider>
   <Route exact path="/animals/detail/:animalId(\d+)">
		<AnimalDetail />
	</Route>
</AnimalProvider>

            {/* Render the animal list when http://localhost:3000/locations */}
            <LocationProvider>
              <Route exact path="/locations">
                <LocationList />
              </Route>
              <Route exact path="/locations/create">
                  <LocationForm />
                </Route>
            </LocationProvider>

            <LocationProvider>
              <Route exact path="/locations/detail/:locationId(\d+)">
                <LocationDetail />
              </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/customers */}
            <CustomerProvider>
              <Route exact path="/customers">
                <CustomerList />
          `   </Route>
            </CustomerProvider>

            <CustomerProvider>
              <Route exact path="/customers/detail/:customerId(\d+)">
                <CustomerDetail />
            	</Route>
            </CustomerProvider>

            {/* Render the animal list when http://localhost:3000/employees */}
            <EmployeeProvider>
              <LocationProvider>
                <Route exact path="/employees">
                  <EmployeeList />
                </Route>
                <Route exact path="/employees/create">
                  <EmployeeForm />
                </Route>
              </LocationProvider>
            </EmployeeProvider>

            <EmployeeProvider>
              <Route exact path="/employees/detail/:employeeId(\d+)">
                <EmployeeDetail />
            	</Route>
            </EmployeeProvider>

        </>
    )
}