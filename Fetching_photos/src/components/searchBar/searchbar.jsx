import { useState } from 'react';
import './searchbar.css'

const Searchbar = ({submit}) => {
    const [searchTerm, setsearchTerm] = useState('');
    const handleChange = (event)=>{
        setsearchTerm(event.target.value);
    }

    const submitHandler =(e) => {
        e.preventDefault();
        submit(searchTerm);
    };


    return(
        <div className='search-bar-div'>
            <p style={{color :'white'}}> search the fuck up ....</p>
            <form onSubmit={submitHandler}>
            <input className='form-ip' type ="text"  value={searchTerm} onChange={handleChange}/>
                </form>      
                  </div>
    );
};

export default Searchbar;
