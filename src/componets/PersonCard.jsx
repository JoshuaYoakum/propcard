import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0, 
            age: this.props.person.age
        }
    }
    handleDecrementCount =()=>{
        this.setAge({count:this.state.count-1})
    }
    render() {
        const {person}=this.props
        return (
        <div>
            <h1>{person.firstName}, {person.lastName}</h1>
            <p>{this.state.age}</p>
            <p>{person.hair}</p>)
            <button onClick={()=>this.setState({age: this.state.age+1})}>birthday</button>
        </div>);
    }
}
    
export default PersonCard;