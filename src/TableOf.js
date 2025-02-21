import React from "react";
import "./TableOf.css";

class TableOf extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tableOf: 1 };
    }


        renderTableOf = () => {
            let i = 1;
            let array = [];
            while (i <= 10) {
                let index = i;
                let ui = (
                    <button
                        className="cell-button"
                        style={{ backgroundColor: "pink", fontWeight: "bold" }}
                        onClick={() => this.buttonClicked(index)}
                        key={index}
                    >
                        {index}
                    </button>
                );
                array.push(ui);
                i++;
            }
            return <div className="row">{array}</div>;
        };
    

    }
    export default TableOf;


