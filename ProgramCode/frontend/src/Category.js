import React from 'react'

export default function Category({ category, checkMarkCategory }) { // Prints checkbox and category name side-by-side
  function CheckboxToggle() {
    checkMarkCategory(category.name)
  }
  return (
    <div data-testid='category-test' className='category'>
      <input type="checkbox" checked={category.selected} onChange={CheckboxToggle} />
      {category.name}
    </div>
  )
}
