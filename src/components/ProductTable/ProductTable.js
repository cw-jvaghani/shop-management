import Button from "../Button";
import { getQuantity } from "../../utils/getQuantity";
import { useNavigate } from "react-router-dom";
import getPrice from "../../utils/getPrice";
import classes from "./ProductTable.module.css";
export default function ProductTable({ productList }) {
  const navigate = useNavigate();
 function navigateToSell(prodId){
   navigate('sell/'+prodId);
 } 

 function navigateToStock(prodId){
  navigate('stock/'+prodId);
 }


  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Sr.No.</th>
          <th>Product Name</th>
          <th>Avilable Qty</th>
          <th>Latest Selling Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {productList.map((prod,i)=>{
            return(<tr key={prod.id}>
              <td>{i+1}</td>
              <td>{prod.title}</td>
              <td>{getQuantity(prod)}</td>
              <td>{getPrice(prod)}</td>
              <td>
                <span><Button onClick={()=>navigateToSell(prod.id)}>Sell</Button></span>
                <span><Button onClick={()=>navigateToStock(prod.id)}>Restock</Button></span>
              </td>
            </tr>);
})}
      </tbody>
    </table>
  );
}
