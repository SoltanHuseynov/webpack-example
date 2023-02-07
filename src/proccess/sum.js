
export function getSum(num,box){
   let num1=new Number(num[0].value)
   let num2=new Number(num[1].value)
   var Numbers=((num1&num2)=="")? false:true
   console.info(Numbers,box[0])
   if(!Numbers){
    box[0].innerText=`result:${null}`
   }else{
    box[0].innerText=`result:${num1+num2}`
   }
}
