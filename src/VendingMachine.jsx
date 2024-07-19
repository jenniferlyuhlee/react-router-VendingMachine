import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
    return(
        <div>
            <h1>Vending Machine</h1>
            <div className="VM-container">
                <img className="VM-img"
                    src="https://www.uselectit.com/wp-content/uploads/evoke-snack-5.png"/>
                <div className="VM-links">
                    <Link className="VM-link"to="/sourpatch">Sourpatch Kids</Link>
                    <Link className="VM-link"to="/drpepper">Dr. Pepper</Link>
                    <Link className="VM-link"to="/cheetos">Jalapeno Cheetos</Link>
                </div>
            </div>
        </div>
    )
}

export default VendingMachine;