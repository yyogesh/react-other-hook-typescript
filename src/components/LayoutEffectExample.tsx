import React, { useEffect, useLayoutEffect } from 'react'

// The Difference Between useEffect and useLayoutEffect
// It’s all in the timing.

// useEffect runs asynchronously and after a render is painted to the screen.

// So that looks like:

// React renders your component (calls it)
// The screen is visually updated
// THEN useEffect runs

// useLayoutEffect, on the other hand, runs synchronously after a render but before the screen is updated. That goes:

// useLayoutEffect runs, and React waits for it to finish.
// The screen is visually updated

const LayoutEffectExample = ({ message }: { message: string }) => {
    useEffect(() => {
        console.log("USE EFFECT FUNCTION TRIGGERED");
    });
    useLayoutEffect(() => {
        console.log("USE LAYOUT EFFECT FUNCTION TRIGGERED");
    });
    return (
        <div>LayoutEffectExample - {message}</div>
    )
}

export default LayoutEffectExample