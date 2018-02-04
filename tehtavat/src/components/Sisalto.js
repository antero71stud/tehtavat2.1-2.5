import React from 'react';
import Osa from './Osa'

const Sisalto = ({ osat }) => {
  console.log('sisalto ',osat)
  const summa = osat.reduce((sum,osa) => sum + osa.tehtavia,0)
  console.log('summa ',summa)
    return (
      <ul>   
      {osat.map(osa => <Osa key={osa.id} osa={osa}/>)}
      </ul>

    )
}

export default Sisalto