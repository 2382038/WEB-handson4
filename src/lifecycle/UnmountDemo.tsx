import React, { useEffect, useState } from 'react'

const ChildComponent = () => {
  useEffect(() => {
    console.log("✅ Child Component Mounted")
    return () => {
        console.log(" ❌Child Component Mounted")
    }
}, [])
return <p>Child component id mounted</p>
}

const UnmountDemo = () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <button onClick={() => setShow(!show)}>{show ? "Unmount child component": "Mount child component"}</button>
        {show && <ChildComponent />}
      </div>
    )
  }
  

export default UnmountDemo
