import React from "react";
import { useState, useEffect } from "react";
import Cell from "./Cell";
import "../assets/style/carousel.css"
// import Placeholder from "../assets/placeholder.png"



export function CellIndicators() {

}

export default function Carousel() {
    const [cells, setCells] = useState([]);


    useEffect(() => {
        for(var i = 0; i < 5; i++) {
            const newCell = {
                img: "hi",
                title: "Cell",
                description: "Cell description"
            }

            setCells(cells => [...cells, newCell]);
        }
    }, [])

    return (
        <>
            <div className="carousel-container">
                <button className="left-button">{`<`}</button>
                <button className="right-button">{`>`}</button> 
                <div className="cell-container">
                    {cells.map((cell, index) => (
                        <Cell key={index} cellImage={cell.img} title={cell.title} desc={cell.description} />
                    ))}
                </div>
            </div> 
        </>
    )
}
