export const SearchBar = () => {
    return(
        <div className='w-9/10'>
          <input className="p-2 rounded border-black border-2 bg-slate-200 text-black" type="text" placeholder="Search.."></input>
          <button type='submit'><i className="fa fa-search"></i></button>
        </div>
    )
}