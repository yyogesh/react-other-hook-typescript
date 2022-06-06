import React, { useId } from 'react'

const UseIDExample = () => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>Do you like React?</label>
            <input id={id} type="checkbox" name="react" />

            <div>
                <label htmlFor={id + '-firstName'}>First Name</label>
                <div>
                    <input id={id + '-firstName'} type="text" />
                </div>
                <label htmlFor={id + '-lastName'}>Last Name</label>
                <div>
                    <input id={id + '-lastName'} type="text" />
                </div>
            </div>
        </div>
    )
}

export default UseIDExample

// function NameFields() {
//     const id = useId();
//     return (
//         <div>
//             <label htmlFor={id + '-firstName'}>First Name</label>
//             <div>
//                 <input id={id + '-firstName'} type="text" />
//             </div>
//             <label htmlFor={id + '-lastName'}>Last Name</label>
//             <div>
//                 <input id={id + '-lastName'} type="text" />
//             </div>
//         </div>
//     );
// }