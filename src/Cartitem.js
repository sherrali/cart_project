import React from "react";

class Cartitem extends React.Component{
    render(){
        console.log("this.props" , this.props)
        const {product,
             onIncreaseQuantity,
             onDecreaseQuantity,
             onDeleteProduct
            } = this.props;
        const{ title, price , qty} = this.props.product;
        return(
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image} alt=""/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25}}>{title}</div>
                    <div style={ {color : '#777'}}>Rs : {price}</div>
                    <div style={ {color : '#777'}}>qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <img
                         alt="increase" 
                         className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                         onClick={() =>{onIncreaseQuantity(product)}}
                         />
                        <img
                         alt="decrease"
                         className="action-icons" 
                         src="https://t3.ftcdn.net/jpg/05/25/82/62/240_F_525826235_kQXRqPCQyDuhXGjV4FjpVY8Mb68jGJD8.jpg"
                         onClick={() => {onDecreaseQuantity(product)}}
                         />
                        <img 
                        alt="delete"  
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                        onClick={() => {onDeleteProduct(product.id)}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    image : {
        height : 110,
        width : 110,
        birderRadius : 5,
        backgroundColor : '#777'
    }
}
export default Cartitem;