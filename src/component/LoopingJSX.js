import React from "react";

export default class LoopingJSX extends React.Component {
    render() {
        const fruits = ["Apple", "Banana", "Orange", "Mango", "Pinaaape"];
        return (
            <div>
                <h1>Fruit List</h1>
                <ul>
                    {fruits.map((fruit) => (
                        <li>{fruit}</li>

                    ))}

                </ul>
            </div>
        )

    }
}