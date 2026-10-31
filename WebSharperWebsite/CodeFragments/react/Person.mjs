import React from "react";

function ShowPerson(props) {
    return (
        <ul className="person">
            <li>Name: {props.name}</li>
            <li>Age: {props.age}</li>
        </ul>
    );
}

// Example usage:
// <ShowPerson name="Alice" age={30} />
