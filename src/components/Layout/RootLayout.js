import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import ProductContextProvider from "../../context/product-context";
function RootLayout(){
  return<>
    <MainNavigation/>
    <ProductContextProvider>
    <Outlet/>
    </ProductContextProvider>
  </>
}

export default RootLayout;