import React from "react";
import { Link } from "react-router-dom";
import "./Snack.css"

const Snack = ({name, description, image}) => {
    return (
        <div className="Snack">
            <h1 className="Snack-name">{name}</h1>
            <p className="Snack-desc">{description}</p>
            <img className="Snack-img" src={image} alt={name}/>
            <Link className="Home-link" to="/">GO BACK</Link>
        </div>
    )
}

export default Snack;