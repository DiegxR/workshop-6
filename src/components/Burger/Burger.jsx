import React from 'react'
import { useSelector } from 'react-redux'
import Ingredient from '../ingredient/Ingredient'
import {BurgerSC, Bread} from './styles.js'

const Burger = () => {
    const { selectedIngredients } = useSelector(store=> store.builder)
  return (
    <BurgerSC>
      <Bread variable='top' />
      {selectedIngredients.map((ingredient, index) => (
        <Ingredient />
      ))}
      <Bread variable='bottom' />
    </BurgerSC>
  )
}

export default Burger