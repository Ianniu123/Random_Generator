import { useState } from 'react'
import GenerateButton from './components/button'
import Search from './components/search'



function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Random Recipe Generator</h1>
        <Search />
      </div>
    </>
  )
}

export default App;
