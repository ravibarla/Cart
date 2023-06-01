
import './App.css';
import Cart from './Cart'
import Navbar from './Navbar'
import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state={
       products:[
        {
            title:"phone",
            price:999,
            qty:1,
            img:'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            id:1
        },
        {
            title:"watch",
            price:777,
            qty:2,
            img:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            id:2
        },
        {
            title:"shoes",
            price:1011,
            qty:3,
            img:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            id:3
        }
       ]
    }
}
handleIncreaseQuantity=(product)=>{
    // console.log("increase button clicked",product)
    const {products}=this.state
    const index=products.indexOf(product)
    products[index].qty+=1
    this.setState(
        {products}
    )
}
handleDecreaseQuantity=(product)=>{
    // console.log("increase button clicked",product)
    const {products}=this.state
    const index=products.indexOf(product)
    if(products[index].qty===0){
        return
    }
    products[index].qty-=1
    this.setState(
        {products:products}
    )
}
handleDeleteProduct=(id)=>{
    const {products}=this.state
    const items=products.filter((item)=>item.id!==id)
    this.setState(
        {
            products:items
        }
    )
}
getCartCount=()=>{
    const {products}=this.state
    let count=0
    products.forEach((product)=>{count+=product.qty})
    return count
}
getTotalPrice=()=>{
  const {products}=this.state
    let totalPrice=0
    products.forEach((product)=>{totalPrice+=product.price*product.qty})
    return totalPrice
}
  render(){
    const {products}=this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/*  */}
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity} 
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding:10,fontSize:20}}>TOTAL : {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
