import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';



const HomeoMed = () => {
    
    const [homeoDrugs, setHomeoDrugs] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/homeoDrugs?search='+search)
        .then(res =>res.json())
        .then(data =>setHomeoDrugs(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Homeo Drugs in Bangladesh :{homeoDrugs.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   homeoDrugs.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default HomeoMed;