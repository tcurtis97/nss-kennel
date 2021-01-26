import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../locations/LocationProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"



export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)


  const history = useHistory()

  
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)

  }, [])


  return (
    <div className="animals">
      <button onClick={() => {history.push("/animals/create")}}>
            Add Animal
          </button>
      
        {animals.map(animal => {
           const location = locations.find(l => l.id === animal.locationId)
          const owner = customers.find(c => c.id === animal.customerId)
         return <AnimalCard key={animal.id} animal={animal} owner={owner} location={location} />
        })
      }
    </div>
  )
}