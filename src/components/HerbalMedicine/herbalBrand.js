import React, { useEffect, useState } from 'react';
// import amcDrugsData from '../../amcDrugsData';
import Drugs from '../Drugs/Drugs';



const HerbalBrand = () => {
    
    const [HerbalBrand, setHerbalBrand] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/herbalBrand?search='+search)
        .then(res =>res.json())
        .then(data =>setHerbalBrand(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)

    }
    return (
        <div className = "drugs-container">
            
            <h5>Total Herbal Brand in Bangladesh :{HerbalBrand.length}</h5>
            <input type="text" className="drug-search" placeholder = "Search drug" onBlur = {handleSearch} />
           
               {
                   HerbalBrand.map(dg =><Drugs drug = {dg}></Drugs>)
               }

           
        </div>
    );
};

export default HerbalBrand;