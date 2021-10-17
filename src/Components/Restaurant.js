import React,{useState,useEffect} from 'react'
import "./Style.css";
import Menu from './MenuApi.js';
import Menucard from './Menucard';

function Restaurant() {
    // debugger;
   const [menuData, setMenuData] = useState([]);
   useEffect(() => {
       
       setMenuData(...Menu)
   console.log(menuData);
   },[])

   
 


    return (
       
            <>
             {menuData.map((ele)=>{
            return(
                
                <div>{ele.id}</div>
             
             
            
            );
        })}


        {/* <Menucard menuData={menuData}/> */}
            
            
             </>
            
       
    )
}

export default Restaurant
