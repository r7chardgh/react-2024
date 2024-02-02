import React from 'react'

const MyButton = () => {
    const [count, setCount] = React.useState(0)
    function handleClick() {
        setCount(count+1);
    }
  return (
    <button className='btn' onClick={handleClick}>Clicked {count} times</button>
  )
}

export default MyButton