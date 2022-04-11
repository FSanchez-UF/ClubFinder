import React from 'react'

export default function Category({ category, selectCategory }) {
  function CheckboxToggle() {
    selectCategory(category.name)
  }
  return (
    <div className='category'>
      <input type="checkbox" checked={category.selected} onChange={CheckboxToggle} />
      {category.name}
    </div>
  )
}
