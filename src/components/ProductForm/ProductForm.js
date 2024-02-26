import Button from "../Button";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useProductContext } from "../../context/product-context";
import { getQuantity } from "../../utils/getQuantity";
import classes from "./ProductForm.module.css";

function ProductForm({origin}){
  const [error, setError] = useState();
  const params = useParams();
  const prodId = +params.prodId;
  const {productItems,handleSellProduct,handleStockProduct} = useProductContext();

  const productItem = productItems.find(item => item.id=== prodId); 
  const availableQty = getQuantity(productItem);
  const latestBoughtPrice =productItem.stock.length>0 ?  productItem.stock.slice(-1)[0].price : 0;

  function handleChange(e){

    const inputVal = e.target.value;
     if(inputVal > availableQty && origin==='sell'){
      setError("The sold quantity must not be greater than Stocked Qty");
     }
     else{
      setError('')
     }
  }


  function handleSaveData(e){
       e.preventDefault();
       const fd = new FormData(e.target); 
       const recordInputs = Object.fromEntries(fd.entries());
       if(recordInputs.quantity==='' || recordInputs.price==='' ||
          +recordInputs.quantity <=0 || +recordInputs.price <=0){
         setError('The input fields must not be empty zero or negative');
         return;
       }
       const record = {id:prodId,quantity:+recordInputs.quantity,price:+recordInputs.price};

       if(origin==='sell'){
        handleSellProduct(record);
       }
       else if(origin==='stock'){
         handleStockProduct(record);
       }            
  }

  return (
        <div className={classes['form-wrapper']}>
          <h2>{`Selected Product for ${origin}: ${productItem.title}`}</h2>
          <p>{`Available quantity : ${availableQty}`}</p>
          <p>{`Latest buying price: ${latestBoughtPrice}`}</p>
          <form onSubmit={handleSaveData}>
            <label htmlFor="quantity">Qunatity</label>
            <input type="number" id="quantity" name="quantity"  onChange={handleChange}/>
            <p>{error && <span>{error}</span>}</p>
    
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price"/>
    
            <Button disabled={error ? true :false}>Save Data</Button>
          </form>
        </div>
      );
}

export default ProductForm;