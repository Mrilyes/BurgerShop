import React from 'react'
import Logo from '../../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.css'
const sideDrawer  = (props) => {
    return (
        <div  className={classes.SideDrawer}>   
            {/* <Logo height="12%"/>  first approach  */}
            {/* Second approach */}
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    ); 
}

export default sideDrawer