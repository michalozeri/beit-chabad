export function Filter({ onFilterInput, filterBy }) {
  return (
    <section className="filter">
      <div className="filter-container">
        <img src={require("../assets/imgs/search.png")} alt="" />
        <input
          className="filter-input"
          placeholder="חיפוש לפי שם"
          type="text"
          name="fullname"
          value={filterBy}
          id=""
          onChange={onFilterInput}
        />
      </div>
    </section>
  );
}
