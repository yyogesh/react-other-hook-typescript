import React, { useTransition } from 'react';


// useTransition() can be used to tell React that certain state updates have a lower priority (i.e., all other state updates or UI rendering triggers have a higher priority).
// useTransition() gives you full control since you decide which code should be wrapped and treated as "low priority". Sometimes though, you might not have access to the actual state updating code (e.g., because it's performed by some third-party library).

// With useDeferredValue(), you don't wrap the state updating code but instead the value that's in the end generated or changed because of the state update (either the state value itself or some value that's computed based on the state value

// function ProductList({ products }) {
//     const deferredProducts = useDeferredValue(products);
//     return (
//       <ul>
//         {deferredProducts.map((product) => (
//           <li>{product}</li>
//         ))}
//       </ul>
//     );
//   }

//useDeferredValue() is used to wrap products. As a result, React will perform other state or UI updates with a higher priority than updates related to the products value.

//As mentioned above, the difference is that useTransition() wraps the state updating code, whilst useDeferredValue() wraps a value that's affected by the state update. You don't need to (and shouldn't) use both together, since they achieve the same goal in the end. 

const TrasitionHook = () => {
    const [input, setInput] = React.useState('');
    const [list, setList] = React.useState<string[]>([]);
    const [isPending, startTransition] = useTransition();

    const LIST_SIZE = 20000;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
        startTransition(() => {
            const data = [];
            for (let i = 0; i < LIST_SIZE; i++) {
                data.push(e.target.value);
            }
            setList(data);
        });
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange} />
            {isPending ? 'Loading...' :
                list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
        </div>
    )
}

export default TrasitionHook