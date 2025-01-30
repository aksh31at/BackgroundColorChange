import React from "react"
import ReactDOM from 'react-dom/client'

//useState kehta hai usko mein initialise kroonga
//useState ko conditional statements mein nhi daalskte
function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div className="first">
            <h1>Count is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

let element = ReactDOM.createRoot(document.getElementById('root'));
element.render(<Counter />);