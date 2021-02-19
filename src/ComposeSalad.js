import React, { Component } from "react";
import Salad from './Salad';

class ComposeSalad extends Component {
   

constructor(props) {
super(props);
this.state = {
    foundation: '',
    protein: [],
    extra: [],
    dressing: '',
};

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handleClick = this.handleClick.bind(this);
}

handleChange(event){
    if(event.target.id === "foundationSelect"){
        this.setState({foundation: event.target.value});
    }else{
        this.setState({dressing: event.target.value});
    }
}

handleClick(event){
const target = event.target;

if(target.id==="proteinCheck"){
    if(this.state.protein.includes(target.name)){
        let index1 = this.state.protein.indexOf(target.name);
        this.state.protein.splice(index1,1)
    }else{
        this.state.protein.push(target.name);
    }   
    this.setState({protein: this.state.protein})
}else{
    if(this.state.extra.includes(target.name)){
        let index1 = this.state.extra.indexOf(target.name);
        this.state.extra.splice(index1,1)
    }else{
        this.state.extra.push(target.name);
    }   
    this.setState({extra: this.state.extra})

}  

}
handleSubmit(event){
    event.preventDefault();

    let salad = new Salad();
    salad.foundation = this.state.foundation;
    salad.protein = this.state.protein;
    salad.extra = this.state.extra;
    salad.dressing = this.state.dressing;
    //alert(salad.protein);
    
    this.props.addSalad(salad);

    this.setState({foundation: ''});
    this.setState({protein: []});
    this.setState({extra: []});
    this.setState({dressing: ''});
}

render() {
    const inventory = this.props.inventory;
    let foundations = Object.keys(inventory).filter(
    name => inventory[name].foundation
    );

    let protein = Object.keys(inventory).filter(
        name => inventory[name].protein
    );
    let extra = Object.keys(inventory).filter(
        name => inventory[name].extra
    );
    let dressing = Object.keys(inventory).filter(
        name => inventory[name].dressing
    );
 
    return (
 <div>     
    <form onSubmit={this.handleSubmit}>
        
        <div>
        <h4>
            Select the foundation: 
        </h4>
        <select id = "foundationSelect" className="form-select" value={this.state.foundation}
        onChange = {this.handleChange}>
            
        {foundations.map(name => <option
            key={name}>{name}</option>)}   
        </select>

        </div>
        <h4>Select protein: </h4>
            {protein.map((name)=>
        <div className="form-check"  className = "text-center" key={name}>
        <input className="form-check-input" type="checkbox" id="proteinCheck"
        checked={this.state.protein.includes(name)||false} onChange={this.handleClick} name={name}></input>
        <label className="form-check-label" htmlFor="flexCheckDefault">
            {name}
        </label>
        </div>
      )}

        <h4>Select extra: </h4>
            {extra.map(name=>
        <div className="form-check"  className = "text-center" key ={name}>
        <input className="form-check-input" type="checkbox" id="extraCheck"
        checked={this.state.extra.includes(name)||false} onChange={this.handleClick} name={name}></input>
        <label className="form-check-label" htmlFor="flexCheckDefault">
            {name}
        </label>
        </div>
      )}

        <div>
        <h4>
            Select the dressing: 
        </h4>
        <select id = "dressingSelect" className="form-select" value={this.state.dressing}
        onChange = {this.handleChange} >
            
        {dressing.map(name => <option
            key={name}>{name}</option>)}
       
        </select>
        </div>
        <div  className = "text-center">
        <input type = "submit" value="Submit"></input>
        </div>
    
    </form>

    </div>
    );

}
}

export default ComposeSalad;