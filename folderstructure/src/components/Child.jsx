import React from 'react'

const Child = ({data,change}) => {
    // console.log(data,change)
  return (
    <div>
        <h1>from child</h1>
        <button onClick={()=>change("mayuresh")}>change content</button>
    </div>
  )
}

export default Child
