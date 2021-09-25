import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';



const UnaniBrand = () => {
    
    const [unaniBrand, setUnaniBrand] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/unaniBrand?search='+search)
        .then(res =>res.json())
        .then(data =>setUnaniBrand(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Unani Brand in Bangladesh :{unaniBrand.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   unaniBrand.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default UnaniBrand;