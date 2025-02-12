import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import UsingState from './state/UsingState'
import Lifecycle from './lifecycle/Lifecycle'
import UnmountDemo from './lifecycle/UnmountDemo'

function App() {

  return (
    <>
      <UnmountDemo/>
    </>
  )
}

export default App
