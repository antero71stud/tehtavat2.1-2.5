import React from 'react';
import Sisalto from './Sisalto'
import Otsikko from './Otsikko'


const Kurssi = ({ kurssi }) => {
  console.log('Kurssi, kurssi ',kurssi)
    return (
    
      <div><Otsikko otsikko={kurssi.nimi} />
      
      <Sisalto osat={kurssi.osat}/>
      </div>
    )
}

export default Kurssi