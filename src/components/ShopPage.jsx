import React from 'react';

import products from './../data/data'



//parent compoenent  pass cart ka object child component ko 

//parent compoenent ka pass aik state ha => cart
//parent compoenent na apne Child Compoenent jo ka => <Cart></Cart> 
// aik paramerter pass kiya ha 
// us para meter k pass current cart ka data ha 
// const Cart=(props)
// ander Object Destrcutre 
// const {abc,cart}=props
const Cart=({cart,abc})=>{
    // const Cart=(props)=>{
    //     const {cart}=props
    console.log('====================================');
    console.log("cart",cart);
    console.log("abc",abc);
    console.log("cart.totalItems",cart.totalItems);
    console.log("cart.totalItems",cart.totalPrice);
    console.log('====================================');
    return (
    <div className="">
        <p>Total Items : {cart.totalItems }</p>
        <p>Total Price : {cart.totalPrice }</p>
    </div>)
}



function ShopPage (){


const [state,setState]=React.useState(products)
const [cart,setCart]=React.useState({
    totalPrice:0,
    totalItems:0
})





const addToCart=(product)=>{
console.log('====================================');
console.log("item",product.price);
console.log('====================================');
//totalItems:cart.totalItems+1
//,
//totalPrice:cart.totalPrice+item.price
// wrap {}
setCart({totalItems:cart.totalItems+1,totalPrice:cart.totalPrice+product.price})
}




const resetCart= ()=>{
    setCart({totalItems:0,totalPrice:0})
}
   



    return (
        <>
        <Cart cart={cart} abc={"abc"}></Cart>
        <button type="button" className="btn btn-sm btn-warning" onClick={resetCart}>Reset Cart</button>
        {
            state.map((product,index)=>{
                return (
                    <div className="col-md-4 p-3"  key={product.name}>
                    <div className="card border border-dark p-2">
                        <div className="card-header text-center text-capitalize">{product.name}</div>
                        <div className="card-img text-center">
                            <img src={product.img} className="img-fluid" style={{height:100}}/>
                        </div>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure impedit eius iusto itaque quod tenetur corrupti! Maxime consequatur, unde eos repudiandae rem omnis corporis dicta, optio cupiditate earum suscipit.
                        </div>
                        <div className="card-footer text-center">
                            <button onClick={()=>{addToCart(product)}} className="btn btn-sm btn-success">Add to cart 
                            $-{product.price}</button>
                        </div>
                    </div>
                    </div>
                )
            })
        }
       
       </>
    )
}

export default ShopPage