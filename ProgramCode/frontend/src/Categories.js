import React from 'react'
import Category from './Category'

export default function Categories({categories, selectCategory}) {
  return (
      categories.map(category => {
        return <Category key={category.name} category={category} selectCategory={selectCategory} />
      })
  )
}


