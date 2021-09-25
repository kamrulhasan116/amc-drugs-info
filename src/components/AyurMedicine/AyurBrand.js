import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';



const AyurBrand = () => {
    
    const [ayurBrand, setAyurBrand] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/ayurBrand?search='+search)
        .then(res =>res.json())
        .then(data =>setAyurBrand(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Ayurvedic Brand in Bangladesh :{ayurBrand.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   ayurBrand.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default AyurBrand;