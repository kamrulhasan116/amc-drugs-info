import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';
import './AmcDrugs.css'


const AmcDrugs = () => {
    <h1>AMC Drugs Info Made By Dr. Kamrul Hasan</h1>
    
    const [drugs, setDrugs] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(()=>{
        fetch('http://localhost:4000/drugs?search='+search)
        .then(res =>res.json())
        .then(data =>setDrugs(data))
    }, [search])

    const handleSearch = event => {
       
        setSearch(event.target.value);
        
       

    }
    return (
        <div className = "total-drug">
            
            <h5>Total AMC Drugs in Bangladesh :{drugs.length}</h5>
            <input type="text" className="drug-search"  placeholder = "Search drug" onBlur = {handleSearch} />
           
           
               {
                   drugs.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default AmcDrugs;