import React from "react";
import "./Table.css"; // Ensure this file exists in the same directory

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tableOf: 1 };
  }

  renderCell = (tableOf, number) => {
    return (
      <div className="row" key={number}>
        <button className="cell-button">{tableOf}</button>
        <span className="multi"> {" X "} </span>
        <button className="cell-button">{number}</button>
        <span className="multi"> {" = "} </span>
        <button className="cell-button">{tableOf * number}</button>
      </div>
    );
  };

  renderTable = () => {
    let array = [];
    for (let i = 1; i <= 10; i++) {
      array.push(this.renderCell(this.state.tableOf, i));
    }
    return array;
  };

  renderTableOf = () => {
    let array = [];
    for (let i = 1; i <= 10; i++) {
      array.push(
        <button
          key={i}
          className="cell-button text-dark"
          style={{ backgroundColor: "lightgreen" }}
          onClick={() => this.buttonClicked(i)}
        >
          {i}
        </button>
      );
    }
    return <div className="row">{array}</div>;
  };

  buttonClicked = (index) => {
    console.log(index);
    this.setState({ tableOf: index });
  };

  render() {
    return (
      <div className="table">
        {this.renderTableOf()}
        {this.renderTable()}
      </div>
    );
  }
}

export default Table;
