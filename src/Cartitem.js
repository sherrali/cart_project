import React from "react";

class Cartitem extends React.Component{
    constructor(){
        super();
        this.state={
            price : 999,
            title : "Mobile Phone",
            qty : 1,
            img : ''
        }
    }
    increaseQuantity= () =>{
        console.log( 'this' ,this.state )
        // this.setState(this.state)
    }
    render(){
        const{price , title , qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=""/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25}}>{title}</div>
                    <div style={ {color : '#777'}}>Rs -{price}</div>
                    <div style={ {color : '#777'}}>qty -{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <img
                         alt="increase" 
                         className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                         onClick={this.increaseQuantity}
                         />
                        <img
                         alt="decrease"
                         className="action-icons" 
                         src="https://t3.ftcdn.net/jpg/05/25/82/62/240_F_525826235_kQXRqPCQyDuhXGjV4FjpVY8Mb68jGJD8.jpg"
                         />
                        <img 
                        alt="delete"  
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
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