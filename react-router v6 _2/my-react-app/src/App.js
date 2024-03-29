import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Login from "./components/Login";
import Search from "./components/products/Search";
import AddProduct from "./components/products/AddProduct";
import ProductDisplay from "./components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";



// 1) ///////////////////////
// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/"> Home </Link>
//         <Link to="login"> Login </Link>
//         <Link to="products/search"> Products </Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="products" element={<Products />}/>
//         <Route path="products/search" element={<Search />} />
//         <Route path="products/list" element={<ListProducts />} />
//         <Route path="products/add" element={<AddProduct />} />
//         <Route path="products/:id" element={<ProductDisplay />} />     
//       </Routes>
//     </Router>
//   );
// }
// export default App;


// 2) ///////////////////////
function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products/search"> Products </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;






