import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FullScreen from './components/FullScreen'
import dataJ from './data.json'
import { MyContext } from './MyContext'

function App() {

  // let statsArray = dataJ
  // console.log(statsArray)
  const [quickData, setQuickData] = useState(dataJ)
  

  
  return (
    <div className="bg-custom-blue min-h-screen flex justify-center items-center">
      <MyContext.Provider value={{quickData,setQuickData}}>
        <FullScreen />
      </MyContext.Provider>
    </div>
  )
}

export default App
