
export function Filter({onFilterInput, filterBy}){

  
    return (
        <section className="filter">
            <input className="filter-input" placeholder="חיפוש לפי שם" type="text" name="fullname" value={filterBy} id="" onChange={onFilterInput} />
        </section>
    )
}