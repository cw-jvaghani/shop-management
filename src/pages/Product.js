import ProductTable from "../components/ProductTable/ProductTable";
import { useProductContext} from '../context/product-context';

function ProductPage(){
  const {productItems} = useProductContext();

  return <ProductTable productList={productItems}/>
}

export default ProductPage;