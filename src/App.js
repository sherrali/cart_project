import React from "react";
// import Cartitem from "./Cartitem";
import Cart from './Cart'
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
    super();
    this.state={
    products :[ {
        price : 99,
        title : "Watch",
        qty : 1,
        img : 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18855400/2022/6/30/8eefcd30-d10c-4da2-89df-223a58471b201656571898566-Hurricane-2381656571897793-1.jpg',
        id : 1,
    },
    {
        price : 999,
        title : "Mobile Phone",
        qty : 10,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MWtv0r3mpMSqqKZzviFhyTINXGcGP5M_XA&usqp=CAU',
        id : 2,
    },
    {
        price : 999,
        title : "Laptop",
        qty : 4,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlABIEPOyTnCC1sSFzIg_6E4o_3fpJ9e-Erw&usqp=CAU',
        id : 3,
    }
]
    }
}
handleIncreaseQuantity =(product) => {
    // console.log("hey increase the quantity of product", product)
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products : products,
    })
}

handleDecreaseQuantity = (product) =>{
    // console.log("hey decrease the qty of cart item " , product)
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return products;
    }
    products[index].qty -= 1;
    this.setState({
        products: products,
    })
}

handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
        products : items,
    })
}

getCartCount = () =>{
  const {products} = this.state;
  let count = 0;
  products.forEach((product)=>{
    count += product.qty;
  })
  return count;
}
getCartTotal= () => {
  const {products} = this.state
  let cartTotal = 0;

  products.map((product) =>{
    cartTotal = cartTotal + product.qty * product.price;
  })
  return cartTotal;
}
render (){
  const {products} = this.state
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <Cart 
      products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteProduct = {this.handleDeleteProduct}/>
         <div style= {{fontSize : 15 , padding : 10}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}
export default App;
