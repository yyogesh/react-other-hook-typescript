import React, { forwardRef, useImperativeHandle, useState } from 'react';

function ChildComponent(props: any, ref: any) {
    const [openModal, setOpenModal] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal: (value: boolean) => setOpenModal(value),
    }));

    if (!openModal) return null;

    return (
        <div>
            <p>This is a modal!</p>
            <button onClick={() => setOpenModal(false)}> Close </button>
        </div>
    )

}

export default forwardRef(ChildComponent);