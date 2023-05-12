import { ProductsData } from "../data/products";
import { useState } from "react";

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='search'>
            <input type='text' placeholder='search' onChange={(event) => {setSearchTerm(event.target.value)}}/>
            {
                ProductsData.filter((val)=>{
                    if (searchTerm == ""){
                        return val
                    }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((val, key) =>
                    {
                        return (
                        <div key={key}><p>{val.name}</p></div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Search;