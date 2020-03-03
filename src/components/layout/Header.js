import React from 'react';
import {FaPizzaSlice} from 'react-icons/fa'
// export const Header = () =>(
//    <p> Header </p>
// )

export const Header  = () =>{
   const x = 1;

   return(
      <header className="header" data-testid="header">
         <nav>
            <div className="logo">
               <img src="/image/logo.png" alt="logo"></img>
            </div>
            <div className="settings">
               <ul>
                  <li>+</li>
                  <li><FaPizzaSlice/></li>
               </ul>
            </div>
         </nav>
      </header>
   )
}

