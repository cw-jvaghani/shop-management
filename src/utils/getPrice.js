function getPrice(product){

   if(product.sell.length > 0){
     const price =  product['sell'].slice(-1)[0].price;
     return price; 
   }
   else{
    return 0;
   }
}

export default getPrice;

