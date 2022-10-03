import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

//this script will transform an object of key values pairs into an array of burger ingredients
// the value of the objs is important to decide how many ingredients I need 
// and the key is important for the type of the ingredients that I need 
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map((_ , i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr , el) => {
        return arr.concat(el); 
    } , []);

    // console.log(trasformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients }  
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;