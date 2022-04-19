import React from 'react'
import Category from './Category'

export default function Categories({categories, checkMarkCategory}) { // Loops through categories array and returns a Category component
  return (
      categories.map(category => {
        return <Category key={category.name} category={category} checkMarkCategory={checkMarkCategory} />
      })
  )
}