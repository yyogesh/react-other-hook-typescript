import React, { useState } from 'react';
import { flushSync } from 'react-dom';

{/* <Suspense fallback={<p>Fetching user details...</p>}>
<UserWelcome />
</Suspense> */}

const StateBatching = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        flushSync(() => {
            setCount(count => count + 1);
        })
        flushSync(() => {
            setToggle(toggle => !toggle);
        })
    }

    console.log('Rendered', count, toggle);

    return (
        <div>
            <div>Count: {count}</div>
            <div>toggle: {toggle.toString()}</div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default StateBatching