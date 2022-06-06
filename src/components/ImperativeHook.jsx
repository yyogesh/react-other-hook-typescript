// In React, data is passed from parent to child components via props, known as unidirectional data flow. The parent component cannot directly call a function defined in the child component or reach down to grab a value for itself.

// In certain circumstances, we want our parent component to reach down to the child component, getting data that originates in the child component for its own use. We can achieve this type of data flow with the useImperativeHandle Hook, which allows us to expose a value, state, or function inside a child component to the parent component through ref. You can also decide which properties the parent component can access, thereby maintaining the private scoping of the child component.

//useImperativeHandle(ref, createHandle, [dependencies])

// ref: the ref passed down from the parent component
// createHandle: the value to be exposed to the parent component
// dependencies: an array of values that causes the Hook to rerun when changed

// Use cases
// When you need a bidirectional data and logic flow, but you don’t want to overcomplicate things by introducing state management libraries, the useImperativeHandle Hook is a great choice.

import React, { useRef, useImperativeHandle, forwardRef } from "react"

function sendEvent() {
  // send event on focus
  console.log("Event has been sent!")
}

export function ImperativeChildExampleComponent(props, ref) {
  // we need to create a new ref for the input to be able to focus on the element
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      // send event
      sendEvent()

      // focus on the input after we send the event
      inputRef.current.focus()
    },
  }))

  return <input {...props} ref={inputRef} />
}

const ImperativeChildExample = forwardRef(ImperativeChildExampleComponent)

// ANgular ElementRef ==> nativeElement

export default function ImperativeParentExample() {
  const ref = useRef(null)
  return (
    <div>
      <ImperativeChildExample ref={ref} />
      <button onClick={() => ref?.current?.focus()}>Focus!</button>
    </div>
  )
}