import React from 'react'
import { render, screen } from '@testing-library/react'
import Result from '../Result'

test('Checks that a club renders properly', () => {
    const result = {name:'AeroGator', purpose: '...', website: 'N/A', category: 'Engineering'}

    render(<Result result={result} />)
    const todoElement = screen.getByTestId('category-test')
    expect(todoElement).toBeInTheDocument();
})