import React from 'react';
import { Link,useLocation} from 'react-router-dom';
import {myRoute} from '../route/router'

function Menu(props) {
    let location=useLocation();
    
    return (
        <div className="NavLink">
            {myRoute.map(item=>{
               return(<Link  to={item.path} id="hurray" className={location.pathname===item.path?"active":""}>{item.label}</Link>)
            })}
        </div>
    );
}

export default Menu;