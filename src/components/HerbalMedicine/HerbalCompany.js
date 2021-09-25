import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';



const HerbalCompany = () => {
    
    const [HerbalCompany, setHerbalCompany] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/herbalCompany?search='+search)
        .then(res =>res.json())
        .then(data =>setHerbalCompany(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Herbal Company in Bangladesh :{HerbalCompany.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   HerbalCompany.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default HerbalCompany;