import React from "react";
import { useState, useEffect } from "react";
import Cell from "./Cell";
import "../assets/style/carousel.css"




export function CellIndicators() {

}

export default function Carousel() {
    const [cells, setCells] = useState([]);


    useEffect(() => {
        for(var i = 0; i < 5; i++) {
            const newCell = {
                img: "...",
                title: "Cell",
                description: "Cell description",
                id: i
            }
            console.log("hey")
            setCells(cells => [...cells, newCell]);
        }

        const cellElements = document.querySelectorAll(".cell-card");
        console.log(cellElements)
        cellElements.forEach((cell) => {
            const cellDataId = cell.getAttribute('data-id');

            cell.style.transform = `translateX(${((cellDataId - (cells.length / 2)) * 100)}%)`
            
        })
    }, [])

    return (
        <>
            <div className="carousel-container">
                <button className="scroll-button" id="left">{`<`}</button>
                <button className="scroll-button" id="right">{`>`}</button> 
                <div className="cell-container">
                    {cells.map((cell, index) => (
                        <Cell key={index} id={index} cellImage={cell.img} title={cell.title} desc={cell.description} />
                    ))}
                </div>
            </div> 
        </>
    )
}
