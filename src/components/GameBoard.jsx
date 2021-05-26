import { Component } from 'react'

export class GameBoard extends Component {
  render() {
    return (
      <ul>
        {this.props.board.map((boardRow, rowIndex) => {
          return boardRow.map((cell, columnIndex) => {
            return (
              <li
                key={columnIndex}
                className={cell === ' ' ? '' : 'taken'}
                onClick={() =>
                  this.props.handleClickCell(rowIndex, columnIndex)
                }
              >
                {cell}
              </li>
            )
          })
        })}
      </ul>
    )
  }
}
export default GameBoard
