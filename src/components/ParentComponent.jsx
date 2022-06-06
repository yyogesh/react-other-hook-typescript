import React, { useRef } from 'react';
import Child from './Child';

const ParentComponent = () => {

    const childRef = useRef(null);

    const handleOpenModal = (value) => {
        if (childRef?.current) { }
        childRef?.current?.openModal(value);
    }


    return (
        <div>
            <p>This is a parent component</p>
            <Child ref={childRef} />

            <button onClick={() => handleOpenModal(true)}>Open modal</button>
        </div>
    )

}

export default ParentComponent;