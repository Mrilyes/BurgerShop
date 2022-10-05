import React from 'react'
import Logo from '../../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.css';
import Backdrop  from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary'
const sideDrawer  = (props) => {
    let attachedClasses =[classes.sideDrawer , classes.Close];

    if(props.open){
        attachedClasses = [classes.SideDrawer , classes.Open];
    } 
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div  className={attachedClasses.join(' ')}>   
                {/* <Logo height="12%"/>  first approach  */}
                {/* Second approach */}
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    ); 
}

export default sideDrawer