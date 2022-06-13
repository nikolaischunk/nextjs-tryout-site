import React, { useState, useEffect } from 'react'


const count = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0); // <--- useState is the hook
    return (<div class="count">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>);
}

export default count;