import React from 'react'
import { render, screen } from '@testing-library/react'
import clear from '../App'

test('Checks that Clear Selections button renders properly', () => {
    render(<Clear clear={clear}/>)
    const todoElement = screen.getByTestId('cleared-test')
    expect(todoElement).toBeInTheDocument();
})