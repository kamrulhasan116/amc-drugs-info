import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';



const UnaniMedicine = () => {
    
    const [unaniDrugs, setUnaniDrugs] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/unaniDrugs?search='+search)
        .then(res =>res.json())
        .then(data =>setUnaniDrugs(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Unani in Bangladesh :{unaniDrugs.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   unaniDrugs.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default UnaniMedicine;