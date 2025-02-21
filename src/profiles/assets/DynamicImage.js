import React, { useState } from "react";

export default function DynamicImage() {
    const [chooseFruit, setSelectedFruit] = useState("apple");

    const fruitImages = {
        apple: "https://cdn.pixabay.com/photo/2016/11/18/13/47/apple-1834639_1280.jpg",
        banana: "https://media.istockphoto.com/id/157375066/photo/banana.jpg?s=612x612&w=0&k=20&c=3v7si4IY-VZRIiUnG2fUodH2kIF4ipt06YnrtBCF3nc=",
        orange: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?cs=srgb&dl=pexels-pixabay-161559.jpg&fm=jpg",
    };
    const onSelectChange = (event) => {
        setSelectedFruit(event.target.value);
    }

    return (
        <div>
            <h1>Select a fruit</h1>
            <select className="fruit-selector" onChange={onSelectChange}>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
            <h2>You Selected: {chooseFruit}</h2>
            <img src={fruitImages[chooseFruit]} alt="Fruit"
                style={{ width: "20vw", height: "20vw", margin: "50px" }} />

        </div>
    )
}
