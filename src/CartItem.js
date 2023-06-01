
const CartItem =(props)=>{

   
        // console.log("this.props",this.props)
        const {title,price,qty,img}=props.product
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props
        return(
            <div className='cart-item' >
                <div className='left-block'>
                    <img alt='' style={styles.image} src={img}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#7777'}}>Rs {price}</div>
                    <div style={{color:'#7777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                    {/* Buttons  */}
                    <img className='action-icons'alt="increase" src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png" onClick={()=>{onIncreaseQuantity(product)}}/>
                    <img className='action-icons'alt="descrease" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick={()=>{onDecreaseQuantity(product)}}/>
                    <img className='action-icons'alt="delete" src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" onClick={()=>{onDeleteProduct(product.id)}}/>
                    </div>
                </div>
            </div>
        )
    
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;