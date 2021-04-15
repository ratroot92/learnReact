import React from 'react';

import products from './../data/data'






function ShopPage (){


const [state,setState]=React.useState(products)

   



    return (
        <>
        {
            state.map((product,index)=>{
                console.log(product)
                console.log(index)
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
                            <button className="btn btn-sm btn-success">Add to cart 
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