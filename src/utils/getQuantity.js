export function getQuantity(productItem){

   const stockedQty = productItem['stock'] ?  productItem['stock'].reduce((quantity,record)=>  quantity + record.quantity ,0) :0;
   const soldQty = productItem['sell'] ? productItem['sell'].reduce((quantity,record)=>  quantity + record.quantity ,0) : 0;
   return stockedQty - soldQty;


}