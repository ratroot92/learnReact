import React from 'react';
// const ShopCart=({cart})=>{
    const ShopCart=(props)=>{   
    const {cart}=props;
    //what we have inside cart 
    const {totalItems,totalPrice,itemsList}=cart;
/**
 * Use Cases 
 * this cart doesnot show the items added (names)
 * explanation => 
 * 1)we should a complete product object in cart 
 * 
 * 
 * this cart doesnot show the quantity of items added
 * we cannot remove a product from cart 
 * this cart doesnot shows the image of the object 
 */

const removeItemFormCart=()=>{
  console.log('====================================');
  console.log("removeItemFormCart");
  console.log('====================================');
}

    return (
    <div className="row ">
        <div className="col-md-12 mb-5   ">
      <div className="d-flex flex-row justify-content-between align-items-center">
      <p className="m-0 p-0 text-dark font-weight-bold">Total Items : {cart.totalItems || 0 }</p>
        <p className="m-0 p-0 text-dark font-weight-bold">Total Price : {cart.totalPrice || 0 }</p>
     
      </div>
        </div>
        <div className="col-md-3 text-center p-1 border border-success font-weight-bold ">Product Name</div>
        <div className="col-md-3 text-center p-1 border border-success font-weight-bold">Produc Price</div>
        <div className="col-md-3 text-center p-1 border border-success font-weight-bold">Product Quantity</div>
        <div className="col-md-2 text-center p-1 border border-success font-weight-bold">Product Image</div>
        <div className="col-md-1 text-center p-1 border border-success font-weight-bold">Remove</div>
       
        {itemsList.length > 0 && itemsList.map((item)=>{
        return ( 
        <>

        <div className="col-md-3 text-center p-3 border border-success">{item.name}</div>
        <div className="col-md-3 text-center p-3 border border-success">{item.price}</div>
        <div className="col-md-3 text-center p-3 border border-success">{1}</div>
        <div className="col-md-2 text-center p-3 border border-success"><img src={item.img} className="img-fluid " style={{height:'40px',width:'40px'}} /></div>
        <div className="col-md-1 text-center p-3 border border-success"><button onClick={removeItemFormCart} className="btn btn-sm btn-danger">*</button></div>
          </>
)
      })}
             {/* <ul className='list-group list-unstyled'>
          {itemsList.length > 0 && itemsList.map((item)=>{
              return ( <li className="list-group-item w-100">Product Name : {item.name} <img src={item.img} className="img-fluid " style={{height:'25px',width:'25px'}} /></li>)
          })}
         
      </ul> */}
      {/* <select className="form-control form-control-sm">
            <option value="">Cart Items </option>
          {itemsList.length > 0 && itemsList.map((item)=>{
              return ( <option key={item.name} value={item.name}>{item.name} : 1</option>)
          })}
         
      </select> */}
        
    </div>)
}
export default ShopCart