import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';



const HerbalMedicine = () => {
    
    const [herbalDrugs, setHerbalDrugs] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/herbalDrugs?search='+search)
        .then(res =>res.json())
        .then(data =>setHerbalDrugs(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Herbal Drugs in Bangladesh :{herbalDrugs.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   herbalDrugs.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default HerbalMedicine;