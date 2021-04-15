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
        <>
        {products.map((item,index)=>{
            return(<div className="col-md-4">
            <div className="card">
                <div className="card-header">{item.name}</div>
                <div className="card-img text-center">
                    <img src={item.img} className="img-img-thumbnail"/>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ducimus aspernatur dicta fugiat ipsa accusantium voluptates esse, inventore excepturi magni placeat quam officiis dolor voluptatem alias enim velit cumque eveniet!</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-sm btn-success">Add to cart</button>
                </div>
            </div>
            </div>)
        })}
        </>
    )
}

export default ShopPage