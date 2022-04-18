import React from 'react'
import { render, screen } from '@testing-library/react'
import Submit from '../Submit'

test('Checks that Submit button renders properly', () => {
    render(<Submit result={result}/>)
    const todoElement = screen.getByTestId('submit-test')
    expect(todoElement).toBeInTheDocument();
})