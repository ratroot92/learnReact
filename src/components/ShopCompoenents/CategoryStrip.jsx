import React from 'react'

 function CategoryStrip() {
    return (
        <div className="  mt-2 border border-success p-2  d-flex flex-row justify-content-around align-items-center">
            <button 
            type="button"
            className="btn btn-sm btn-primary text-white"
            >
            Fruits</button>
            <button 
            type="button"
            className="btn btn-sm btn-primary text-white"
            >
            Vegetables</button>
            <button 
            type="button"
            className="btn btn-sm btn-primary text-white"
            >
            Soups</button>
        </div>
    )
}
export default CategoryStrip