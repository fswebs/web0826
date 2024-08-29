import React from "react";

function Counter({ aheart }) {
    let [counter, setCounter] = React.useState(0);
    const onClick = () => {
        setCounter(num => num + 1);
    };

    return <button onClick={onClick}>{aheart + counter}</button>;
}

export default Counter;
