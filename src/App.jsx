import { Square } from "./components/Square"
import { checkEndGame, checkWinner } from "./utils/logic/index"
import { TURNS } from "./constants"
import { useState } from "react"
import { ModalSquare } from "./components/ModalSquare"
import confetti from "canvas-confetti"
import { loadLocalstorage, resetLocalstorage, saveLocalstorage } from "./utils/storage/storage"

export const App = () => {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem('board')
    if (boardStorage) return JSON.parse(boardStorage)
    return Array(9).fill(null)
  })
  const [isXTurn, setIsXTurn] = useState(() => {
    const turndStorage = window.localStorage.getItem('turn')
    return turndStorage ?? TURNS.X

  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return; //si ya hay 3 iguales no hacer nada ya
    const newBoard = [...board];
    newBoard[index] = isXTurn;
    setBoard(newBoard) //actualizar el tablero con el nuevo turno 
    //cambiar el turno 
    const newTurn = isXTurn === TURNS.X ? TURNS.O : TURNS.X;
    setIsXTurn(newTurn);
    saveLocalstorage({board: newBoard, turn: newTurn})
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {//ver si ya acabo el juego
      setWinner(false)
    }
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setIsXTurn(TURNS.X)
    resetLocalstorage()
  }

  return (
    <main className='flex justify-center h-screen'>
      <section className="container max-w-[550px] flex justify-center items-center flex-col gap-2">
        <h1 className='text-2xl font-bold'>Tic Toc Toe</h1>
        <section className="grid grid-cols-3 gap-5 py-5 ">
          {
            board.map((square, index) => {
              return (
                <div className="border border-gray-500">
                  <Square key={index} index={index} updateBoard={updateBoard} >
                    {square}
                  </Square>
                </div>
              )
            })
          }
        </section>
        <section className="w-full flex justify-center items-center gap-3">
          Turno de:
          <span className="bg-blue-500 h-10 w-10 flex items-center justify-center font-bold text-2xl border-0 rounded-md pointer-events-none">
            {
              isXTurn === TURNS.X ? "X" : "0"
            }
          </span>
        </section>
        <ModalSquare winner={winner} reset={resetGame}>
          {winner === false ? "Empate" : `Ganador: ${winner}`}
        </ModalSquare>
      </section>
    </main>
  )
}
