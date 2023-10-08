import React from 'react'

export const ModalSquare = ({ children, winner, reset }) => {
    if (winner === null) return;
    const resetGame = () => {
        reset();
    }
    return (
        <div className="fixed top-5 bg-black rounded-lg shadow-xl w-1/2 max-w-[600px] min-h-[300px]">
            <div className="p-5  grid content-between justify-center flex-col min-h-[300px]">
                <h1 className="text-2xl text-center">¡Felicidades!! 🎉</h1>
                <p className="text-center font-bold text-3xl">{children}</p>
                <button onClick={resetGame} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 max-w-[200px] px-4 rounded-lg mt-5' >Iniciar de nuevo</button>
            </div>

        </div >
    )
}
