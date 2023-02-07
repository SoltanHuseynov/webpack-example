import { getSum } from "../proccess/sum"
export class ComponentServer {
   constructor(){
      this.inputs=document.querySelectorAll("[data-value]")
      this.button=document.getElementById("equalEnd")
      this.box=document.getElementsByTagName("p")
   }   
   todisplayValue(){
      getSum([...this.inputs],this.box)
   }
}