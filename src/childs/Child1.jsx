import React from 'react'
import Child2 from './Child2';

export default function Child1() {

    const [haseeb,setHaseeb]=React.useState('haseeb')



    return (
        <div>
            <h1>CHILD1</h1>
            <Child2 name={haseeb} setter={setHaseeb} />
        </div>
    )
}
