import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById, deleteLocation } = useContext(LocationContext)

	const [location, setLocations] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  const locationDelete = () => {
    locationDelete(location.id)
      .then(() => {
        history.push("/locations")
      })
  }

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocations(response)
    })
    }, [])

  return (
      <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__addess">{location.address}</div>
        <button onClick={locationDelete}>Delete Location</button>
    </section>
  )
}