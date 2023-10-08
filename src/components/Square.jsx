import React from 'react'

export const Square = ({ children, updateBoard, index }) => {
    const handleClick = () => {
        updateBoard(index)
    }

    return (

        <span onClick={handleClick} key={index} className=' h-10 w-10 flex items-center justify-center font-bold cursor-pointer' >{children}</span>

    )
}
