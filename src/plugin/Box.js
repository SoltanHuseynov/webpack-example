let newBox=document.createElement("p")
let att=document.createAttribute("id")
att.value="getBox"
newBox.setAttributeNode(att)
newBox.innerText=`result:`

document.body.append(newBox)
export {newBox}