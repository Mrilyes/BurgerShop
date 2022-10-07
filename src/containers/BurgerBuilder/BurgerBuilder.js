import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControl from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat : 1.5,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // constructor(props){
    // super(props);
    //     this.state = {

    //     };
    // }
    // shorter syntax (alternative to constructor)
    state = {
            ingredients : {
                bacon: 0,
                salad: 0 ,
                cheese : 0,
                meat : 0
            },
            totalPrice: 4,
            purchasable : false,
            purchasing : false
    }

    updatePurchaseState(ingredients) {
        // create an array of strings entries 
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum , el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0 });
    }

    addIngredinentHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredinentHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) return ;
        const updatedCount = oldCount - 1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing:true})
    }

    purchaseCancel = () => {
        this.setState({purchasing:false})
    }

    purchaseContinueHander = () => {
        alert('You continue');
    }

    render () {
        // clone the ingredients (immuatate)
        const disabledInfo = {
            ...this.state.ingredients
        };
        // {salad: true , meat : false ...}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        } 
        return (
            <Aux>
                <Model show={this.state.purchasing} modelClosed = {this.purchaseCancel}> 
                    <OrderSummary ingredients={this.state.ingredients} 
                    price = {this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancel}
                    purchaseContinued = {this.purchaseContinueHander}
                    />
                </Model>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControl 
                ingredientsAdded = {this.addIngredinentHandler}
                ingredientsRemoved = {this.removeIngredinentHandler}
                disabled = {disabledInfo}
                purchasable = {this.state.purchasable}
                ordered = {this.purchaseHandler}
                price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;