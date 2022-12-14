import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../../Logo/Logo';
import NavigationItems from '../../Navigation/Navigationitems/Navigationitems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked ={props.drawerToggleClick}/> 
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);
export default toolbar;