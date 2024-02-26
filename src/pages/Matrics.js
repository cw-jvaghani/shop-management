
import { useProductContext } from "../context/product-context";

function MetricsPage(){
  const {totalRevenue,totalCost,income,inventoryValue} = useProductContext();

  


 return<div className="matrics-wrapper">
  <p>{`Total revenue : ${totalRevenue}`}</p>
  <p>{`Total cost : ${totalCost}`}</p>
  <p>{`${income <0 ? 'Loss' : 'Profit'} : ${income}`}</p>
  <p>{`Inventory Value : ${inventoryValue}`}</p>
 </div>
}

export default MetricsPage;