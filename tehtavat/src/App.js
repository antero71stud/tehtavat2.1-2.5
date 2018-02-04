import React from 'react'
import Kurssi from './components/Kurssi'

const App = (props) => {
  const { kurssit } = props;
    return (
      <div>
        {kurssit.map(kurssi=><Kurssi key={kurssi.id} kurssi={kurssi} />)}
      </div>
    )
  }

  export default App
