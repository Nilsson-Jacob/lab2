import { nanoid } from 'nanoid';
import inventory from './inventory.ES6';

let temp = Object.keys(inventory);

class Salad{
    constructor(){
    this.foundation=[];
    this.protein=[];
    this.extra=[];
    this.dressing=[];
    this.id = nanoid() //getUniqeuId();
    }
    
    add(type,item){
        if(type==="foundation"){
            this.foundation.push(item);
        }else if(type==="protein"){
            this.protein.push(item);
        }else if(type=="extra"){
            this.extra.push(item);
        }else if(type==="dressing"){
            this.dressing.push(item);
        }
    }

    remove(type,item){
    if(type==="foundation"){
        this.foundation.splice(this.foundation.indexOf(item),1);
    }else if(type==="protein"){
        this.foundation.splice(this.protein.indexOf(item),1);
    }else if(type==="extra"){
        this.foundation.splice(this.extra.indexOf(item),1);
    }else if(type==="dressing"){
        this.foundation.splice(this.dressing.indexOf(item),1);
    }
        
    }

  price(){
        const reducer = (accumulator, currentValue) => (+accumulator + inventory[currentValue].price);
        let sallad = temp.filter(m=>this.foundation.includes(m)||this.protein.includes(m)||this.extra.includes(m)||this.dressing.includes(m));
        return sallad.reduce(reducer,0);    
    }
}
export default Salad;