import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal, owner, location }) => (
    <section className="animal">
         <h3 className="animal__name">
        <Link to={`/animals/detail/${animal.id}`}>
          { animal.name }
        </Link>
      </h3>
        <div className="animal_breed">Breed: {animal.breed}</div>
        <div className="animal_owner">Owner: {owner.name}</div>
        <div className="location__address">{location.name}</div>
    </section>
)

