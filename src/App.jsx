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
      <Filter filterBy={filterBy} onFilterInput={onFilterInput}/>
      <DonatorsList donators={donators}/>
    </div>
  );
}

export default App;
