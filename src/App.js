import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import AllProducts from './Pages/Home/Products/AllProducts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>

        <Route path='checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='manageproducts' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
