import {HasFormatter} from '../interface/HasFormatter.js'

export class Invoice implements HasFormatter{
  constructor( 
    private client:string,
    private detail:string,
    private amount:number
  ){}
  format(){
    return `${this.client} pays ${this.amount} for buying ${this.detail}`;
  }
}
