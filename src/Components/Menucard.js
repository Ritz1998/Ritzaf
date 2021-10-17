import React from 'react'

const Menucard=({menuData})=> {
    console.log(menuData);
    return (
        <>
        
        {menuData.map((ele)=>{
            return(
                <>
                <div>{ele.id}</div>
             
             
            </>
            );
        })}
       
      


            
        
 </> );
};

export default Menucard
