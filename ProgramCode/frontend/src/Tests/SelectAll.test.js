import React from 'react'
import { render, screen } from '@testing-library/react'
import selectAll from '../App'

test('Checks that Select All button renders properly', () => {
    render(<SelectAll selectAll={selectAll}/>)
    const todoElement = screen.getByTestId('select-all-test')
    expect(todoElement).toBeInTheDocument();
})