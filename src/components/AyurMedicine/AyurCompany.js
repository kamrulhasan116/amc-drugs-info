import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';



const AyurCompany = () => {
    
    const [ayurCompany, setAyurCompany] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/ayurCompany?search='+search)
        .then(res =>res.json())
        .then(data =>setAyurCompany(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Ayurvedic manufacturer in Bangladesh :{ayurCompany.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   ayurCompany.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default AyurCompany;