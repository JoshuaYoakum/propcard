import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
        const {person}=this.props
        return (
        <div>
            {person.map((p,i)=><div key={i}><h1>{p.firstName}, {p.lastName}</h1>
            <p>{p.age}</p>
            <p>{p.hair}</p></div>)}
        </div>);
    }
}
    
export default PersonCard;