import React, { Component } from 'react';

class Square extends Component{


    handleClick = () => {
        let { index } = this.props
        this.props.handleClick( index )
    }
  render(){

    //Square gets passed value and index from the map function as props, destructured
    let { value, index } = this.props
    return(
      <div>
        <div onClick={ this.handleClick } className = "boxContainer">{value}</div>
      </div>
    )
  }
}

export default Square
