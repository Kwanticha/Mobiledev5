import React, { Component } from 'react'

export default class StatelnClass extends Component {
    
    constructor(props){
    super(props);
    this.state ={
        id : props.myId, //props คือ แม่ส่งให้ลูก
        name : props.name,
        counter :0,
    };
}
clickPlus= ()  => {
    this.setState (
        {

        counter : this.state.counter + 1,
    });
}
clickMinus= ()  => {
    
    this.setState (
        {

        counter : this.state.counter - 1,
    });


}
    render() {
        return (
            <div>
             <p> Name :{this.state.name} </p>
              <strong> Counter </strong>:{this.state.counter} 
              <p>
                <button onClick={this.clickPlus}>+</button>
                  <button onClick={this.clickMinus}>-</button>
              </p>
            </div>
        )
    }
}
