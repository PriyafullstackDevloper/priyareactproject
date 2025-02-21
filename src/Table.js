import React from "react";
import "./Table.css";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tableOf: 1 };
    }

    renderCell = (tableOf, number) => {
        return (
            <div className="row" key={number}>
                <button className="cell-button">{tableOf}</button>
                <span className="multi">{" X "}</span>
                <button className="cell-button">{number}</button>
                <span className="multi">{" = "}</span>
                <button className="cell-button">{tableOf * number}</button>
            </div>
        );
    };

    renderTable = () => {
        let i = 1;
        let array = [];
        while (i <= 10) {
            array.push(this.renderCell(this.state.tableOf, i));
            i++;
        }
        return array;
    };

    
    buttonClicked = (index) => {
        console.log(index);
        this.setState({ tableOf: index });
    };

    render() {
        return (
           
               
            <div> {this.renderTable()}</div>
           
        );
    }
}

export default Table;
