import { ComponentServer } from "../plugin/component";

const getComponents=new ComponentServer()

const display=getComponents.button.addEventListener('click',()=>{
   getComponents.todisplayValue()
})

export {display}