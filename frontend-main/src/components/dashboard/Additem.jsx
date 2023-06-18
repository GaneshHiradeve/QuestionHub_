import React from 'react'
import './add.css'
const Additem = ({data}) => {
    console.log(data)
  return (
    <>
   
 <div className='dash'>
<div className="row">
  <div className="column">
    <table>
      <tr>
        <th>First Name</th>
        <th>Posts</th>
        
      </tr>
      <tr>
        <td>{data.name}</td>
        <td>{data.description}</td>
        
      </tr>
     
    </table>
  </div>
    
</div>
</div>
</>
  )
}

export default Additem
