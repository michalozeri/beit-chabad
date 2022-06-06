
export function Filter({onFilterInput, filterBy}){

  
    return (
        <section className="filter">
            <input type="text" name="fullname" value={filterBy} id="" onChange={onFilterInput} />
        </section>
    )
}