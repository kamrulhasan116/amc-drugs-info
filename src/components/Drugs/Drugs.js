import React from 'react';
import {  NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

import './Drugs.css'


const Drugs = (props) => {
    
    // const [darn, setDarn] = useState('')
    
    console.log(props);
   
    const {
    genericName, brandName, company, indication, dosageDescription, productCategory, diseaseCategory, _id,
    dosage,composition,description,modeOfAction,administration,contraindication,sideEffects,pregnancyCategory,
    precaution,storage,presentation,price,dar,key

    } = props.drug;

    const history = useHistory();

    const showDetails = key =>{
        const url = `drug/${key}`;
        history.push(url)

    }

    

   
    
    return (


        <div>
            
            
          
            <NavLink to = {"/"+key}   activeStyle={{
           
            textDecoration: "none"
           
          }}> <div className = "container">
           
            
               
               
               <h6>{brandName} {dosageDescription}</h6>
               
               <small>{genericName} </small>
               <p>{company}</p>
               
               {/* <h6>Comapany name : {company}</h6>
               <p>Indication :{indication}</p>
               <p>Dosage description :{dosagedescription}</p>
               <p>Product category :{productCategory}</p>
               <p>Disease Category :{diseaseCategory}</p>
               <p>Dosage :{dosage}</p>
               <p>Composition :{composition}</p>
               <p>Description :{description}</p>
               <p>Mode of Action :{modeOfAction}</p>
               <p>Administration :{administration}</p>
               <p>Contraindication :{contraindication}</p>
               <p>Side Effects :{sideEffects}</p>
               <p>pregnancy Category :{pregnancyCategory}</p>
               <p>precaution :{precaution}</p>
               <p>Storage :{storage}</p>
               <p>Presentation :{presentation}</p>
               <p>Price :{price}</p>
               <p>Drug Administration Registration number :{dar}</p>
                <button onClick= {showDar}>DAR</button>  <p>{darn}</p>
                <button onClick = {() =>showDetails(key)}></button> */}

               
               
           </div></NavLink>
          
        
        </div>
    );
};

export default Drugs;