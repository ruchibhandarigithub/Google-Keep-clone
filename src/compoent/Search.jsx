import React,{ useState } from 'react';
import { useNoteContext } from '../customHook/useNoteContext';

const Search = ()=>{
    const { setSearchTerm }=useNoteContext();
    const [search,setSearch]=useState('');
    const handleSearch = (e)=>{
        setSearch(e.target.value);
        setSearchTerm(search);
    }
    return (
        <div className='search-bar'>
            <input type="text" placeholder='Search notes...' 
             
            value={search} onChange={handleSearch} />
        </div>
    )
}
export default Search;