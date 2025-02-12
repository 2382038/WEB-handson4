import React, { useEffect, useState } from 'react'

const Lifecycle = () => {
      const [count, setCount] = useState(0);
      const [otherState, setOtherState] = useState(100);
useEffect(() => {
    console.log("Effect Triggered")
}, [count, otherState]);

  return (
    <div>
        <p>Counter value: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>

        <p>Counter for other value: {otherState}</p>
        <button onClick={() => setOtherState(otherState + 1)}>Increase Other State</button>
    </div>
  )
}

export default Lifecycle
