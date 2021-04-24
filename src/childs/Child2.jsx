import React from 'react'

import Child3 from './Child3'
export default function Child2(props) {
    console.log('====================================');
    console.log("child2 :> ",props);
    console.log('====================================');
    const {name,setter}=props;
// export default function Child2({name}){
    return (
        <div>
            <h1>CHILD2 </h1>
            <h3>name :{name} </h3>
            {/* <Child3 setter={setter} /> */}
            <Child3 {...props} />
        </div>
    )
}
