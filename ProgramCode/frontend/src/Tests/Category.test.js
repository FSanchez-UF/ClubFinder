import React from 'react'
import { render, screen } from '@testing-library/react'
import Category from '../Category'
import selectCategory from '../App'
import checkMarkCategory from '../App'

test('Checks that a category renders properly', () => {
    const category = {name:'Nursing', selected: false}

    render(<Category category={category} selectCategory={selectCategory} checkMarkCategory={checkMarkCategory}/>)
    const todoElement = screen.getByTestId('category-test')
    expect(todoElement).toBeInTheDocument();
})