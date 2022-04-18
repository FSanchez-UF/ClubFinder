import React from 'react'
import Name from './Images/Name1.png'
import Categories from './Categories'
import Submit from './Submit'
import Clear from './Clear'
import SelectAll from './SelectAll'

export default function HomePage({categories, checkMarkCategory, result, clear, selectAll}) { // Renders homepage elements 
  return (
    <div data-testid='page-test' className='HomePage'>

        <div data-testid='logo-test' className='logo'> 
            <img src={Name} alt='Name' />
        </div>

        <div data-testid='label-test' className='label'>
          <h3> Categories </h3>
        </div>

        <Categories categories={categories} checkMarkCategory={checkMarkCategory} />
        <SelectAll selectAll={selectAll}/>
        <Clear clear={clear} /> 
        <Submit result={result} />
    </div>
  )
}
