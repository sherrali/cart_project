import React from "react";
import Cartitem from "./Cartitem";

class Cart extends React.Component {
    constructor(){
        super();
        this.state={
        products :[ {
            price : 99,
            title : "Watch",
            qty : 1,
            img : '',
            id : 1,
        },
        {
            price : 999,
            title : "Mobile Phone",
            qty : 10,
            img : '',
            id : 2,
        },
        {
            price : 999,
            title : "Laptop",
            qty : 4,
            img : '',
            id : 3,
        }
    ]
        }
    }
    handleIncreaseQuantity =(product) => {
        console.log("hey increase the quantity of product", product)
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products : products,
        })
    }

    handleDecreaseQuantity = (product) =>{
        console.log("hey decrease the qty of cart item " , product)
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
    render(){
        const { products } = this.state;
        return(
            <div className="cart">
                {products.map ( (product) => {
                    return  (
                    <Cartitem 
                    product ={product} 
                    key={product.id}
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                    />
                    )
                })}
            </div>
        )
    }
}
export default Cart;