import React, { Component } from 'react';
import Square from './square'

//setting an intial state as an array of 9 items
class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      spaces: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      player1: "X",
      player2: "O",
      spacesLeft: 9,
      gameStatus: "in progress",
    }
  }


//click square populates with this.state player1. alternate between players
//destructure state. if gamestatus is not in progress, perform handleClick function. created conditionals check if spacesLeft is odd and square is empty, add 'X' and decrease spacesLeft by 1. otherwise, spacesleft is even and square is empty, add 'O' and decrease spacesleft by 1.
  handleClick = (squareIndex) => {
      let { spaces, player1, player2, counter, spacesLeft, gameStatus } = this.state

      if (gameStatus != "in progress"){
          return
      } else {

      if (spacesLeft % 2 != 0 && spaces[squareIndex] === " "){
      spaces[squareIndex] = player1
      this.setState({spacesLeft: spacesLeft -1})
      } else if (spacesLeft % 2 === 0 && spaces[squareIndex] === " "){
          spaces[squareIndex] = player2
          this.setState({spacesLeft: spacesLeft -1})
      }

      this.setState({ spaces })

      this.setState({gameStatus: "in progress"})
      this.winningPlayer( spaces )
      }
  }
    //create method for winner.  destructure state.
    checkWinner = (string) => {
        const {gameStatus} = this.state
        if(gameStatus === "Won") {
            setTimeout(function(){ alert("You Win");}, 100)
        } else{
            return
        }
    }

    loadGame = () => {
        window.location.reload()
    }


  winningPlayer = (array) =>{
      let {spaces, spacesLeft, gameStatus} = this.state
      if (spacesLeft <= 5 ){
         if (((array[0] === array[1]) && (array[0] === array[2]) && (array[0] !=" "))||
         ((array[3] === array[4]) && (array[3] === array[5]) && (array[3] !=" ")) ||
         ((array[6] === array[7]) && (array[6] === array[8]) && (array[6] !=" "))||
         ((array[0] === array[3]) && (array[0] === array[6]) && (array[0] !=" ")) ||
         ((array[1] === array[4]) && (array[1] === array[7]) && (array[1] !=" ")) ||
         ((array[2] === array[5]) && (array[2] === array[8]) && (array[2] !=" ")) ||
         ((array[0] === array[4]) && (array[0] === array[8]) && (array[0] !=" ")) ||
         ((array[2] === array[4]) && (array[2] === array[6]) && (array[2] !=" ")))
         {
            // this.setState({gameStatus: "Won"})
            setTimeout(function(){ alert("You Win");}, 100)
            this.setState({gameStatus: "unstarted"})
        } else if ( spacesLeft === 1) {
            setTimeout(function(){ alert("You Tied");}, 100)
            this.setState({gameStatus: "unstarted"})
        }  else {
         return
        }
         // this.checkWinner(gameStatus)
    }
}


        //  }else if {
        //   [3,4,5],
        //   [6,7,8],
        //   [0,3,6],
        //   [1,4,7],
        //   [2,5,8],
        //   [0,4,8],
        //   [2,4,6]
        // ]}
        // for (let i = 0; i < array.length; i++) {
        //



//mapping over the spaces array and assigning a Square component to each index
//Passing <Square /> the value and index of the array as props
  render(){

    let { spaces } = this.state
    let square = spaces.map((value, index) => {
      return(
        <Square
          index={index}
          value={value}
          key = {index}
          handleClick = {this.handleClick}
        />
      )
    })
//passing the variable square that holds logic from the map function to display
    return(
      <div>
        <div>
            <button onClick={this.loadGame}> Reset Button </button>
        </div>
        <h1>Welcome to Tic-Tac-Toe</h1>
        <h3 className = "playerOne">Player One</h3>
        <h3 className = "playerTwo">Player Two</h3>
        <div className ="gameBoard">{square}</div>
      </div>
    )
  }
}

export default Board
