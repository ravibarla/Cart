
import './App.css';
import Cart from './Cart'
import Navbar from './Navbar'
import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor(){
    super()
    this.state={
       products:[],
       loading:true
    }
    this.db=firebase
    .firestore()
}

componentDidMount(){
    this.db
    .collection('products')
    .onSnapshot((snapshot)=>{
      
      const products=snapshot.docs.map(
        (doc)=>{
          const data=doc.data();
          data['id']=doc.id;
          return data;
        })
      this.setState({
        products,
        loading:false
      })
    })
   
}

handleIncreaseQuantity=(product)=>{
    // console.log("increase button clicked",product)
    const {products}=this.state
    const index=products.indexOf(product)
    // products[index].qty+=1
    // this.setState(
    //     {products}
    // )
    const docRef=this.db.collection('products').doc(products[index].id)
    docRef.update({

      qty:products[index].qty+1
    }
    )
    .then(()=>{console.log('updated successfully')})
    .catch((error)=>{console.log(error)})
}
handleDecreaseQuantity=(product)=>{
    // console.log("increase button clicked",product)
    const {products}=this.state
    const index=products.indexOf(product)
    if(products[index].qty===0){
        return
    }
    // products[index].qty-=1
    // this.setState(
    //     {products:products}
    // )
    const docRef=this.db.collection('products').doc(products[index].id)
    docRef.update({
      qty:products[index].qty-1
    }
    )
    .then(()=>{console.log('updated successfully')})
    .catch((error)=>{console.log(error)})

}
handleDeleteProduct=(id)=>{
    // const {products}=this.state
    // const items=products.filter((item)=>item.id!==id)
    // this.setState(
    //     {
    //         products:items
    //     }
    // )
    const docRef=this.db.collection('products').doc(id)
    docRef
    .delete()
    .then(()=>{console.log('updated successfully')})
    .catch((error)=>{console.log(error)})
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
  
addProduct=()=>{
  this.db
  .collection('products')
  .add(
    {
      title:"washing machine",
      price:2999,
      qty:1,
      img:"data:image/jpeg;base64,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"
    }
  )
  .then((docRef)=>console.log(docRef))
}

render(){
    const {products,loading}=this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/*  */}
        <button onClick={this.addProduct}>add product</button>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity} 
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading&&<h1>Loading products ...</h1>}
        <div style={{padding:10,fontSize:20}}>TOTAL : {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
