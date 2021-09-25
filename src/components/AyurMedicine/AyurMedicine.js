import React, { useEffect, useState } from 'react';
import Drugs from '../Drugs/Drugs';
// import amcDrugsData from '../../amcDrugsData';





const AyurMedicine = () => {
    
    const [ayurDrugs, setAyurDrugs] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/ayurDrugs?search='+search)
        .then(res =>res.json())
        .then(data =>setAyurDrugs(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Ayurvedic Drugs in Bangladesh :{ayurDrugs.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   ayurDrugs.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default AyurMedicine;