import { map } from "jquery";
import React, { Component } from "react";

class Orderview extends Component{

constructor(props) {
    super(props);
}
render(){
    let orders = this.props.order;
    if(orders.length===0){
        return(
            <div>
                <h3>
                    Du har inte fylld din order än
                </h3>
            </div>
        )
    }else{
    return(
    <div>
        <h3>din salladsorder är: </h3>
        <div>
        {orders.map((name,index) =>  <h5 key={name.id}>
            {            
            index+1 + ". " + name.foundation  + "," + 
            name.protein  +", "+ name.extra +", " + name.dressing + "| pris: " + name.price()}
        </h5>)                  
    } 
    </div>

    </div>
    )
}
}
}

export default Orderview