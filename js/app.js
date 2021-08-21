// call function for update memory cost, storage cost and delivery charge field value
function ExtraPriceAmount(product, productPrice){
   let productPriceField = document.getElementById(product)
   let  productTotal = productPriceField.innerText;
   let productPriceFieldNew = parseFloat(productTotal);
   productPriceFieldNew = productPrice;
   productPriceField.innerText = productPriceFieldNew;
   calculateTotal()
 }
// call function for get memory cost, storage cost and delivery charge field value
 function getInputValue(product) {
    let productPriceField = document.getElementById(product);
    let productPriceFieldNew = parseFloat(productPriceField.innerText);
    return productPriceFieldNew;
    // console.log(productPriceFieldNew);
}
// calculate total and set value to total prize and total field
function calculateTotal() {
    const memoryTotal = getInputValue('memory-total');
    const storageTotal = getInputValue('storage-total');
    const deliveryTotal = getInputValue('delivery-total');
    const cheapProductValue = document.getElementById('cheap-price');
    const cheapProductValueNew = parseFloat(cheapProductValue.innerText);

    const Total = cheapProductValueNew + memoryTotal + storageTotal + deliveryTotal;

    // update on the html
    document.getElementById('product-total').innerText = Total;
    document.getElementById('total').innerText = Total;
}
// perform event handler for button
  document.getElementById('memory8').addEventListener('click', function(){
    ExtraPriceAmount('memory-total', 0);
    })
  document.getElementById('memory16').addEventListener('click', function(){
    ExtraPriceAmount('memory-total',180);
    })
  document.getElementById('storage256').addEventListener('click', function(){
    ExtraPriceAmount('storage-total', 0);  
    })
  document.getElementById('storage512').addEventListener('click', function(){       
    ExtraPriceAmount('storage-total',100);
    })
  document.getElementById('storage1TB').addEventListener('click', function(){       
    ExtraPriceAmount('storage-total',180);
     })
  document.getElementById('deliveryFree').addEventListener('click', function(){
    ExtraPriceAmount('delivery-total', 0);
   })
  document.getElementById('deliveryCost').addEventListener('click', function(){
    ExtraPriceAmount('delivery-total',20);
   })
  
//    perform event handler for promo code button
   document.getElementById('btn-total').addEventListener('click', function(){
    // ExtraPriceAmount('delivery-total',20);

    const textInput = document.getElementById('text-id');

     if(textInput.value == "stevekaku"){
        let total = document.getElementById('total');
        let totalNew = parseFloat(total.innerText);
        let percentValue = (totalNew / 10) * 2;
        let updateValue = totalNew - percentValue;
        total.innerText = updateValue;
        textInput.value = '';
     }
     else{
         alert('promo code is incorrect');
         textInput.value = '';
     }
   })

