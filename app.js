document.getElementById('phone-plus').addEventListener('click',function(){
   updateProductNumber('phone',true,1219)
})
document.getElementById('phone-minus').addEventListener('click',function(){
   updateProductNumber('phone',false,1219);
})
document.getElementById('case-plus').addEventListener('click',function(){
   updateProductNumber('case',true,59)
})
document.getElementById('case-minus').addEventListener('click',function(){
   updateProductNumber('case',false,59);
})

function updateProductNumber(value,condition,price){
   let productInput= document.getElementById(value+'-number');
   let productNumber=productInput.value;
   if(condition==true)
   {
     productNumber=parseInt(productNumber)+1;
   }
   else{
      if(productNumber>0){
         productNumber=parseInt(productNumber)-1;
      }
   }
   productInput.value=productNumber;

   let updatePricePrimary= document.getElementById(value+'-Price');
   updatePricePrimary.innerText=productNumber*price;
   calculate();

}
function productNumber(value){
   let productInput= document.getElementById(value+'-number');
   let productNumber=parseInt(productInput.value);
   return productNumber;
}
function calculate(){
   let phoneTotal=productNumber('phone')*1219;
   let caseToal=productNumber('case')*59;
   let totalSub=phoneTotal+caseToal;
   let tex=totalSub*0.1;
   let texmain=tex.toFixed(2)
   let total=totalSub+tex;
   document.getElementById('tax').innerText=texmain;
   document.getElementById('total').innerText=total;
   document.getElementById('sub-Price').innerText=totalSub;
}