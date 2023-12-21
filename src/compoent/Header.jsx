import React from 'react';
import Search from './Search';

const Header = ()=>{
   return(
    <div className="header">
         <div className='logo'>
           <img src="logo.png" />
         </div>
       
         <Search />
    </div>
       
   );
}
export default Header;