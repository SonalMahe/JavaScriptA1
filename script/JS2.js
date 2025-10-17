 let priceInput = prompt("Enter a price (for eg: $100):");
 console.log(priceInput);

 let price = parseFloat(priceInput.replace("$",""));
 
 let percentReduce = price * 0.1;

 let finalPrice = price - percentReduce;

 console.log("Your new price is: ", "$"+finalPrice);
 