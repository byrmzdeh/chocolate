import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './context/Context';
import { CartProvider } from 'react-use-cart';
import { LangProvider } from "./context/LangContext";
import { ModeContext, ModeProvider } from "./context/ModeContext";
import { useContext } from "react";
// import { TeamProvider } from './context/TeamContext'





import Dashbaord from "./pages/admin/Dashboard";
import EditProduct from "./pages/admin/update/EditProduct";
import AddProduct from "./pages/admin/update/AddProduct";


import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Checkout from './pages/singlePages/Checkout';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Faq from './pages/Faq';
import Basket from './pages/Basket';
import ShopDetails from './pages/singlePages/ShopDetails';
import TeamOne from './pages/singlePages/TeamOne';
import OurServices from './pages/OurServices';
import Candies from './pages/singlePages/Candies';
import Sweets from './pages/singlePages/Sweets';
import Pure from './pages/singlePages/Pure';
import Columns2 from './pages/singlePages/Columns2';
import Columns3 from './pages/singlePages/Columns3';
import Columns4 from './pages/singlePages/Columns4';
import Payment from './pages/singlePages/Pay';

import Wishlist from './pages/Wishlist';
import { WishlistProvider } from 'react-use-wishlist';






const Main = () => {
  const [mode] = useContext(ModeContext)

  return (
    <div className={mode}>

      <CartProvider>
        <Provider>
          <LangProvider>
            <WishlistProvider>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='*' element={<NotFound />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/signin' element={<SignIn />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/admin' element={<Dashbaord />}></Route>
                <Route path="/admin/add" element={<AddProduct />}></Route>
                <Route path="/admin/edit/:pe" element={<EditProduct />}></Route>

                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/wishlist' element={<Wishlist />}></Route>


                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/faq' element={<Faq />}></Route>

                <Route path='/basket' element={<Basket />}></Route>
                <Route path='/shop/:details' element={<ShopDetails />}></Route>
                <Route path='/basket/:details' element={<ShopDetails />}></Route>
                <Route path='/teamone/:id' element={<TeamOne />}></Route>
                <Route path='/ourservices' element={<OurServices />}></Route>
                <Route path='/candies' element={<Candies />}></Route>
                <Route path='/sweets' element={<Sweets />}></Route>


                <Route path='/pure' element={<Pure />}></Route>
                <Route path='/columns2' element={<Columns2 />}></Route>
                <Route path='/columns3' element={<Columns3 />}></Route>
                <Route path='/columns4' element={<Columns4 />}></Route>
                <Route path='/pay' element={<Payment />}></Route>



              </Routes>
            </WishlistProvider>



          </LangProvider>
        </Provider>
      </CartProvider>


    </div>
  )
}



const App = () => {
  return (



    <BrowserRouter>
      <ModeProvider>
        <Main />
      </ModeProvider>
    </BrowserRouter >


  )
}

export default App

