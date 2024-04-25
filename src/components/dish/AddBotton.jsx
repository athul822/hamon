import React from 'react'
import styled from 'styled-components'

const AddBotton = () => {
    return (
        <div className="inline-flex gap-3 items-center bg-green-400 rounded-2xl">
            <button
                //   onClick={handleIncrement}
                className="text-grey-500 rounded px-5 py-1"
            >
                -
            </button>
            <p className="">{0}</p>
            <button
                //   onClick={handleDecrement}
                className=" text-white rounded px-5 py-1"
            >
                +
            </button>
        </div>
    )
}

export default AddBotton

const MainButtonContainer = styled.div`'
    border-radius: 1em;
`;
const AddBottonContainer = styled.button`
    border-bottom-left-radius: 1em;
    border-top-left-radius: 1em;
`;

