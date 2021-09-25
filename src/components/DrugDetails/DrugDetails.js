import React, { useEffect, useState } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';


import "./DrugDetails.css";
// import Admin from '../Admin/Admin';



const DrugDetails = () => {
  const[property, setProperty] = useState('');
    // let { path, url } = useRouteMatch();
    
    // const [ind, setInd] = useState('');
    // const [disease, setDisease] = useState('');
    // const [dose, setDose] = useState('');
    // const [comp, setComp] = useState('');
    // const [des, setDes] = useState('');
    // const [mode, setMode] = useState('');
    // const [admin, setAdmin] = useState('');
    // const [contra, setContra] = useState('');
    // const [effect, setEffect] = useState('');
    // const [preg, setPreg] = useState('');
    // const [prec, setPrec] = useState('');
    // const [store, setStore] = useState('');
    // const [present, setPresent] = useState('');
    // const [price, setPrice] = useState('');
    // const [darn, setDarn] = useState('');
    
    const {key} = useParams();
    const [singleDrug, setSingleDrug] = useState([]);
    
    let propertyName = Object.keys(singleDrug);
    let neededField1 = propertyName.slice(8);
    
    
    useEffect(()=>{
        fetch(`http://localhost:4000/drug/${key}`)
        .then(res => res.json())
        .then(data =>setSingleDrug(data))
    },[])


    // const showInd= () =>{setInd(singleDrug.indication)};
    // const showDisease= () =>{setDisease(singleDrug.diseaseCategory)};
    // const showDose= () =>{setDose(singleDrug.dosage)};
    // const showCompose= () =>{setComp(singleDrug.composition)};
    // const showDes= () =>{setDes(singleDrug.description)};
    // const showMode= () =>{setMode(singleDrug.modeOfAction)};
    // const showAdmin= () =>{setAdmin(singleDrug.administration)};
    // const showContra= () =>{setContra(singleDrug.contraindication)};
    // const showEffect= () =>{setEffect(singleDrug.sideEffects)};
    // const showPreg= () =>{setPreg(singleDrug.pregnancyCategory)};
    // const showPrec= () =>{setPrec(singleDrug.precaution)};
    // const showStore= () =>{setStore(singleDrug.storage)};
    // const showPresent= () =>{setPresent(singleDrug.presentation)};
    // const showPrice= () =>{setPrice(singleDrug.price)};
    // const showDar= () =>{setDarn(singleDrug.dar)};
   
    return (
        <div>

          
           
            <h1>{singleDrug.brandName}</h1>
            
            <p>{singleDrug.dosageDescription} ({singleDrug.productCategory})</p>
            <h6>{singleDrug.genericName}</h6>
            <h5>{singleDrug.company}</h5>
            <hr />
            {
            neededField1.map(ppt =>(
              <button
              type= "button"
              key = {ppt}
              className = {"btn btn-primary border-dark mr-2"}
              onClick= {() =>setProperty(ppt)}
              
              >
                {ppt.toUpperCase()}

              </button>
            ))
          }
          <hr />
           <div className="col text-center">
             <p>{property}</p>
             
             <p>
             {
               property === "indication" && <h6>{singleDrug.indication}</h6>
             }
             </p>
             <p>
             {
               property === "dosage" && <h6>{singleDrug.dosage}</h6>
             }
             </p>
             <p>
             {
               property === "composition" && <h6>{singleDrug.composition}</h6>
             }
             </p>
             <p>
             {
               property === "description" && <h6>{singleDrug.description}</h6>
             }
             </p>
             <p>
             {
               property === "modeOfAction" && <h6>{singleDrug.modeOfAction}</h6>
             }
             </p>
             <p>
             {
               property === "administration" && <h6>{singleDrug.administration}</h6>
             }
             </p>
             <p>
             {
               property === "contraindication" && <h6>{singleDrug.contraindication}</h6>
             }
             </p>
             <p>{property === "sideEffects" && <h6>{singleDrug.sideEffects}</h6>}</p>
             <p>{property === "pregnancyCategory" && <h6>{singleDrug.pregnancyCategory}</h6>}</p>
             <p>{property === "precaution" && <h6>{singleDrug.precaution}</h6>}</p>
             <p>{property === "storage" && <h6>{singleDrug.storage}</h6>}</p>
             <p>{property === "presentation" && <h6>{singleDrug.presentation}</h6>}</p>
             <p>{property === "price" && <h6>{singleDrug.price}</h6>}</p>
             <p>{property === "dar" && <h6>{singleDrug.dar}</h6>}</p>
           </div>

         {/* <div className="button-all">
         <Link to={`${url}/Indication`}><button onClick= {showInd}>Indication</button></Link>
         <Link to={`${url}/Disease-category`}><button onClick= {showDisease}>Disease category</button></Link>
       
            
            <button onClick= {showDose} >Dose</button>  
            <button onClick= {showCompose} >Composition</button>  
            <button onClick= {showDes}>Description</button>  
            <button onClick= {showMode}>Mode of acton</button>  
            <button onClick= {showAdmin}>Administration</button>  
            <button onClick= {showContra}>Contraindication</button>  
            
            <button onClick= {showEffect}>Side Effects</button>  
            <button onClick= {showPreg}>Pregnancy Category</button>  
            <button onClick= {showPrec}>Precaution</button>  
            <button onClick= {showStore}>Storage</button>  
            <button onClick= {showPresent}>Presentation</button>  
            <button onClick= {showPrice}>Price</button>  
            <button onClick= {showDar}>DAR</button> 
            </div> */}
            
           
            {/* <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Description/>
        </Route>
      </Switch> */}

            
            
            {/* <p>{ind}</p> */}
            {/* <p>{disease}</p>
            
            
            <p>{dose}</p>
            <p>{comp}</p>
            <p>{des}</p>
            <p>{mode}</p>
            <p>{admin}</p>
            <p>{contra}</p>
            <p>{effect}</p>
            <p>{preg}</p>
            <p>{prec}</p>
            <p>{store}</p>
            <p>{present}</p>
            <p>{price}</p>
            <p>{darn}</p> */}
        </div>
      
        
    );
};

// function Description() {
//     // The <Route> that rendered this component has a
//     // path of `/topics/:topicId`. The `:topicId` portion
//     // of the URL indicates a placeholder that we can
//     // get from `useParams()`.
//     let { topicId } = useParams();
  
//     return (
//       <div>
//         <h3>{topicId}</h3>
//       </div>
//     );
//   }



export default DrugDetails;