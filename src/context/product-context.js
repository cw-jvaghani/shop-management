import { createContext,useContext,useMemo,useReducer} from "react";
import PRODUCTS from "../products-data";
import { getQuantity } from "../utils/getQuantity";

const productContext = createContext({
  productItems : [],
  handleSellProduct:()=>{},
  handleStockProduct:()=>{},
});

function reducer(state,action){
  const exisitingItemIndex = state.items.findIndex(item=>item.id=== action.payload.id); 
  const updatedItems = JSON.parse(JSON.stringify(state.items));
  const existingItem = updatedItems[exisitingItemIndex];
  
  if(action.type==="sell"){
    existingItem.sell.push({quantity:action.payload.quantity, price:action.payload.price});
    return {...state, items:updatedItems};
  }

  if(action.type==='stock'){
    existingItem.stock.push({quantity:action.payload.quantity, price:action.payload.price});
    return {...state, items:updatedItems};
  }
}

function getLatestCostPrice(product){
  return  product['stock'].length > 0 ? product['stock'].slice(-1)[0].price : 0;
}

export default function ProductContextProvider({children}){

const [products,dispatch] = useReducer(reducer, {items:[...PRODUCTS]});

  function handleSellProduct(sellData){
    dispatch({type:'sell', payload:sellData});
  }

  function handleStockProduct(stockData){
    dispatch({type:'stock', payload:stockData});
  }

  const totalRevenue = products.items.reduce((totalRevenue,item)=>
  totalRevenue + (item.sell ? item.sell.reduce((revenue, record)=> revenue + record.price * record.quantity , 0) : 0) 
  ,0)

  const totalCost =  products.items.reduce((totalCost,item)=>
  totalCost + (item.stock ? item.stock.reduce((cost, record)=> cost + record.price * record.quantity , 0) : 0) 
  ,0);

   const income = totalRevenue - totalCost;
   
   const inventoryValue = products.items.reduce((inventoryVal, item)=> inventoryVal + getLatestCostPrice(item) * getQuantity(item),0);

  const value = useMemo(()=>({
    productItems : products.items,
    handleSellProduct,
    handleStockProduct,
    totalRevenue,
    totalCost,
    income,
    inventoryValue
  }),[products,totalRevenue,totalCost,income,inventoryValue]);

  return <productContext.Provider value={value}>
    {children}
  </productContext.Provider>
}

export const useProductContext = () => useContext(productContext)
