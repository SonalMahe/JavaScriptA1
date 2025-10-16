 let price = prompt("Enter a price here:");
 console.log("$"+price);

 let priceInNumber = parseInt(price);

 let percentReduce = priceInNumber * 0.1;

 let finalPrice = priceInNumber - percentReduce;

 console.log("Your new price is: ", "$"+finalPrice);
 