import React from 'react';
import data from "../assests/data.json"

function Experiance(){
  const Timelinebox = ({heading, time, index})=>(
    <div className={`timelineItem ${index%2===0?"leftItem":"rightItem"}`}>
      <h1>{heading}</h1>
      <h5>{time}</h5>
    </div>
    
  )
  return (
    <div id='experiance'>
      <div className='timelineContainer'>
        {
          data.experiance.map((x, index)=>{
            return <Timelinebox key={x.name} heading={x.name} time={x.date} index={index}/>
          })
        }
      </div>
    </div>
  )
}

export default Experiance
