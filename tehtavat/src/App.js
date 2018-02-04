import React from 'react'
import Kurssi from './components/Kurssi'

const App = (props) => {
  const { kurssi } = props;
  
  
    return (
      <div>
        <Kurssi kurssi={kurssi} />
      </div>
    )
  }

  export default App
