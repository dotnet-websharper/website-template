import React from "react";

function ShowPerson(props) {
    return (
        Name: {props.name}
        Age: {props.age}
    );
}

// Example usage:
// <ShowPerson name="Alice" age={30} />
