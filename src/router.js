import RootLayout from './components/Layout/RootLayout';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import SalesPage from "./pages/Sales";
import RestockPage from "./pages/Restock";
import MatricsPage from "./pages/Matrics";
import ProductLayout from './components/Layout/ProductLayout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {path:"/",element:<RootLayout/>,children:[
      {index:true, element:<HomePage/>},
      {path:"products",element:<ProductLayout/>,children:[
        {index:true, element:<ProductPage/>},
        {path:"sell/:prodId",element:<SalesPage/>},
        {path:"stock/:prodId",element:<RestockPage/>}
      ]
    },
      {path:'metrics',element:<MatricsPage/>}
    ]}
  ]);

export default router;  