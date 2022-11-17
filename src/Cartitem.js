import React from "react";

class Cartitem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=""/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25}}>Phone</div>
                    <div style={ {color : '#777'}}>Rs - 999</div>
                    <div style={ {color : '#777'}}>qty - 1</div>
                    <div className="action-icons">
                        {/* Buttons*/}
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