import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';



const UnaniCompany = () => {
    
    const [unaniCompany, setUnaniCompany] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/unaniCompany?search='+search)
        .then(res =>res.json())
        .then(data =>setUnaniCompany(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Unani Company in Bangladesh :{unaniCompany.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   unaniCompany.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default UnaniCompany;