/* Account menu */

/* import {Link} from 'react-router-dom' */

import './menus.css'
import {MenuItems}  from './MenuItems'

export default function AccountMenu(){

     return(

         <>
         <div className='container'>
             <div className='accountMenu'>
                 {MenuItems.map((item,idx)=>{
                    return( <a href="/" className="accountMenuItem" key={idx}>{item}</a>) 
                 })}
                 
             </div>
             
         </div>

         </>
     )


}
