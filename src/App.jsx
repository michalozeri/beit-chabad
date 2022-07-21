import { useEffect, useState } from "react";
import { donatoesService } from "./service/donators-service";
import { DonatorsList } from "./cmps/DonatorsList";
import { Filter } from "./cmps/Filter";

function App() {
  const [donators, setDonators] = useState([]);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    const allDonators = donatoesService.query(filterBy);
    setDonators(allDonators);
  }, [filterBy]);

  function onFilterInput(ev) {
      setFilterBy(ev.target.value);
  }

  return (
    <div className="App">
      {/* <h1>יעמדו על הברכה</h1> */}
        <h1>יעמדו על הברכה תורמי המטר לבניין:</h1>
      {donators.length ? (
        <DonatorsList donators={donators} filterBy={filterBy} />
      ) : (
        <div className="not-found">
          <p style={{ direction: "rtl" }}>
            {" "}
            לא מצאנו במערכת את השם "{filterBy}"
          </p>
        </div>
      )}
      <Filter filterBy={filterBy} onFilterInput={onFilterInput} />
      <footer>2022 MICHAL OZERI<img src={require('./assets/imgs/copyright.png')} alt="" /></footer>
    </div>
  );
}

export default App;
