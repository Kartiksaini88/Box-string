import React, { useState } from 'react'
import './Box.css'
const Box = () => {
    const [cells , setcells] = useState(["a","b","c"])
   
    const handleChange = (newvalue,index)=>{
        setcells(cells.map((cell,idx)=>
         idx==index ? newvalue : cell
        ))
       
    }

    const handleAddCell = (idx)=>{
        setcells([
            ...cells.slice(0,idx+1),
            "_",
            ...cells.slice(idx+1)
        ])
    }

    const combineString = cells.join("")

  return (
    <>
       <h3>Click on the plus icon to add a box.👍</h3>
    <div className='main'>
   
      <section className='section'>
        {cells.map((cell,i)=>(
            <div key={i} className='cell'>
                <input type="text"  value={cell} onChange={(e)=>handleChange(e.target.value , i)}/>
                {i < cells.length - 1 && (
                    <span onClick={()=>handleAddCell(i)}>+</span>
                )}
            </div>
        ))}
      </section>
    </div>
    <div><h4>{combineString}</h4></div>
    </>
  )
}

export default Box
