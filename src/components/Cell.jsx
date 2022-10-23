import React from "react";
import PropTypes from 'prop-types';
import Placeholder from "../assets/placeholder.png"

function Cell(props) {
    console.log(props)

    return (
        <div className="cell-card" data-id={props.id} >
            <img src={Placeholder} alt="cell-preview" className="cell-img" />

        </div>
    )
}

export default Cell;

Cell.propTypes = {
  id: PropTypes.number
};