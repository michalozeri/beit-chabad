import { useEffect, useState} from 'react';
import {donatoesService} from './service/donators-service'
import { DonatorsList } from './cmps/DonatorsList'
import { Filter } from './cmps/Filter';

function App() {
  const [donators, setDonators] = useState([])
  const [filterBy, setFilterBy] = useState('')

useEffect(()=>{
  const allDonators = donatoesService.query(filterBy)
  setDonators(allDonators)
  console.log(allDonators);
},[filterBy])

function onFilterInput(ev){
  setFilterBy(ev.target.value)
}

  return (
    <div className="App">
      <header className="App-header"></header>
      {donators.length ?
      <DonatorsList donators={donators}/>:
    <div className='not-found'>
        <p style={{direction:"rtl"}}> לא מצאנו במערכת את השם  "{filterBy}"</p>
    </div>}
      <Filter filterBy={filterBy} onFilterInput={onFilterInput}/>
    
    </div>
  );
}

export default App;
