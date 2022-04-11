import React from 'react'
import Name from './Images/Name1.png'
import Categories from './Categories'
import Submit from './Submit'

export default function Page({categories, selectCategory}) {
  return (
    <div className='Page'>
        <div className='logo'>
            <img src={Name} alt='Name' />
        </div>
        <div className='label'>
          <label> Categories </label>
        </div>
        <Categories categories={categories} selectCategory={selectCategory} />
        <Submit />
    </div>
  )
}
