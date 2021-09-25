import React from 'react';
// import ayurDrugs from '../../amcDrugsData/ayurDrugs';
// import unaniDrugs from '../../amcDrugsData/unaniDrugs';
// import herbalDrugs from '../../amcDrugsData/herbalDrugs';

// import amcDrugsData from '../../amcDrugsData';
// import homeoDrugs from '../../amcDrugsData/homeoDrugs';
import ayur2Drugs from '../../amcDrugsData/ayur2drugs';


const Admin = () => {
    
   
    const handleAddDrugs = () =>{
        fetch("http://localhost:4000/addDrugs",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(ayur2Drugs)

        })
    };
   

    return (
        <div>
            <h2>This is only Admin Site</h2>
            <hr />
            {/* <button onClick = {handleAddDrugs}>Add drugs to database</button>  */}
           
        </div>
    );
};

export default Admin;
