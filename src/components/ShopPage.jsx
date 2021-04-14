import React from 'react';

import products from './../data/data'






function ShopPage (){




    const numbersArray=[1,2,3,4,5,6];

   
    numbersArray.map ((item,index)=>{
    console.log("item",item)
    console.log("index",index)
    })
    //
    






    return (
        <div className="col-md-4">
    <div className="card">
        <div className="card-header"></div>
        <div className="card-img"></div>
        <div className="card-body"></div>
        <div className="card-footer"></div>
    </div>
    </div>
    )
}

export default ShopPage