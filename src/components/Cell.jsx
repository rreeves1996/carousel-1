import React from "react";

function Cell(props) {

    return (
        <div className="cell-container">
            <img src={props.cellImage} alt="cell-preview" className="cell-img" />

        </div>
    )
}

export default Cell;