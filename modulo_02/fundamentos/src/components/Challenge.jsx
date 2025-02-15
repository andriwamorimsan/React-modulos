import React from 'react'

const Challenge = () => {
    const A = 10;
    const B =15;

    return (
        <>
            <p>A: {A}</p>
            <p>B: {B}</p>
            <button onClick={()=> console.log(A+B)}>Clique para ver a soma </button>
        </>
    )
}
export default Challenge
