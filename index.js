import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      Mover: 10 
    };
  }

     //Add code here for Chorus lapilli:
     // Code flow: if current move > 5 then you know that each player will have gone thrice.
     // So, we will check if that move is possible using my function and make sure that, that square is empty using null. 
     // specifically we can check using if (squares[i] === null) --> if that's true then its empty so if (this.state.squareNumber > 5)
     // then we can continue.
  handleClick(i) 
  { 
  var pos       = this.state.stepNumber;
  var posPlOne  = pos + 1; 
  const history = this.state.history.slice(0, posPlOne);
  var len       = history.length; 
  var lenMiOne  = len - 1; 
  const current = history[lenMiOne];
  const NowAt   = this.state.xIsNext ? "X" : "O";
  var NextIs    = this.state.xIsNext;
  const squares = current.squares.slice();
  var MoveIs    = this.state.Mover; 
  var canMove   = (squares[i] !== null); 
  var MoveCheck = InitCheck(pos, canMove);
  var imc       = checkTrue (squares, MoveIs); 
  var Choose    = ChangeSquare(squares, NowAt); 
  var LocCheck  = (MoveIs === i);
  
  if (calculateWinner(squares)) 
  {
    return;
  }
/*
  switch(this.state.stepNumber)
  {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      let CurrentSelection = squares[i]
      if (CurrentSelection !== null)
      {
        return 
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState
      ({
      Mover: i,
      history: history.concat([{squares: squares}]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      });
      break;
  }
  */

  if(pos <= 5) 
  {
    while(MoveCheck === 1)
      {
          return;
      }
    squares[i] = NowAt;
    this.setState
    ({    
    Mover: i,
    history: history.concat([
      {
        squares: squares
      }
    ]),
    stepNumber: len,
    xIsNext: !NextIs,
  });
  }
  else
  {
    if(imc === true)
    {
      if(LocCheck)
      {
      squares[i] = NowAt;
      this.setState
      ({
        Mover: i,
        history : history.concat([
          {
            squares:squares
          }
        ]),
        stepNumber: len,
        xIsNext: NextIs,
      });
      return; 
    }

    if(!CanIMoveThereNext(i, MoveIs) || squares[i])
    {
      return;
    }

    if(Choose === NowAt) 
    {
      squares[i] = NowAt;
      if(!calculateWinner(squares)) 
      {
        squares[i] = null;
        return;
      }
    }
    squares[i] = NowAt;
    this.setState
    ({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: len,
      xIsNext: !NextIs,
      Mover: i,
    });

}

  else 
  {
    
    if(checkTrue(squares, i) || check) 
    {
    return;
    }
 
    squares[i] = null;
    this.setState
    ({
      history: history.concat([
        {
          squares: squares
        }
      ]),
  stepNumber: len,
  xIsNext: NextIs,
  Mover: i,
  });
 }
}
 } 

  jumpTo(step) 
  {
    this.setState
    ({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function checkTrue (squares, load)
{
  if (squares[load] === null)
  {
    return true; 
  }
  return false; 
}
/*
function Move(x, squares)
{
  if (x > 5 && squares[i] === null)
  {
    return false; 
  }
  return true; 
}
*/

function ChangeSquare(squares, NowAt)
{
  var choice; 
  if (squares[4] === NowAt)
  {
    choice = NowAt;  
  }
  return choice;
}

function InitCheck (pos, canMove)
{
  var LocNum = 13
  if (canMove)
  {      
    LocNum = 1; 
  }
  return LocNum;
}

function CanIMoveThereNext(currentPos, nextPos) 
{
  switch (currentPos)
  {
      case 0:
          if (nextPos === 1 || nextPos === 3 || nextPos === 4)
          {
              return true;
          }
          break;
      case 1:
          if (nextPos === 0 || nextPos === 2 || nextPos === 4 || nextPos === 3 || nextPos === 5)
          {
              return true;
          }
          break;
      case 2:
          if (nextPos === 1 || nextPos === 5 || nextPos === 4)
          {
              return true;
          }
          break;
      case 3:
          if (nextPos === 0 || nextPos === 6 || nextPos === 7 || nextPos === 1 || nextPos === 4)
          {
              return true;
          }
          break;
      case 4:
          return true;
      case 5:
          if (nextPos === 2 || nextPos === 8 || nextPos === 1 || nextPos === 7 || nextPos === 4)
          {
              return true;
          }
          break;
      case 6:
          if (nextPos === 3 || nextPos === 7 || nextPos === 4 )
          {
              return true;
          }
          break;
      case 7:
          if (nextPos === 6 || nextPos === 8 || nextPos === 3 || nextPos === 5 || nextPos === 4)
          {
              return true;
          }
          break;
      case 8:
          if (nextPos === 5 || nextPos === 7 || nextPos === 4)
          {
              return true;
          }
          break;
      default:
          return false;
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
