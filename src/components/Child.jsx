import React from 'react'

const Child = ({goStudy,handleStudy}) => {
  return (
   <>
   <h2>I'm Child</h2>
   <p>Click to study</p>
   <button onClick={handleStudy}>{goStudy} times</button>
   </>
  )
}

export default Child