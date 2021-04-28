import React from 'react';
import products from './../data/data'
import CartModal from './ShopCompoenents/CartModal'


function ShopPage (){


const [state,setState]=React.useState(products)
const [controlModal,setControlModal]=React.useState(false)
const [cartObject,setCartObject]=React.useState({
    totalPrice:0,//int //var
    totalItems:0,//int //var
    itemsList:[] // list
})





const addToCart=(product)=>{
    const {price}=product;
    console.log('====================================');
    console.log("price :>> ",price);
    console.log('====================================');
   /**
    * MOST IMPORTANT 
    */
    setCartObject(
        {...state,//sare state wase he rahe sawae jisko men agli line men change karne wala hun 
            totalPrice:cartObject.totalPrice+price,//we set total price  (0+price)
            totalItems:cartObject.totalItems+1,//we set total items (0+1)
            itemsList:cartObject.itemsList.concat(product) //=>[]  , [{product}]

        }
    )
}




const openModal= ()=>{
    console.log('====================================');
    console.log("openModal");
    console.log('====================================');
    setControlModal(true)
}
   



    return (
       
       <div className="row">
       <div className="col-md-12">
           <CartModal control={controlModal} cart={cartObject} setControl={setControlModal}/>
       </div>
        {/* <ShopCart cart={cartObject}></ShopCart> */}
        <div className="col-md-2 offset-md-10  d-flex flex-row justify-content-end mt-2 align-items-center">
        <button className="btn btn-warning btn-sm font-weight-bold " onClick={openModal}>View Cart</button>
        </div> 
       
       
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
       
       </div>
    )
}

export default ShopPage