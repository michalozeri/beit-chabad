import { DebounceInput } from "react-debounce-input";

export function Filter({ onFilterInput, filterBy }) {
  return (
    <section className="filter">
      <div className="filter-container">
        <DebounceInput
          className="filter-input"
          minLength={0}
          debounceTimeout={1000}
          placeholder="חיפוש לפי שם"
          name="fullname"
          value={filterBy}
          onChange={onFilterInput}
        />
        <img src={require("../assets/imgs/search.png")} alt="" />
      </div>
    </section>
  );
}
