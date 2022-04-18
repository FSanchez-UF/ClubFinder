import React from 'react'
import { render, screen } from '@testing-library/react'
import Back from '../Back'
import clear from '../App'

test('Checks that Back button renders properly', () => {
    render(<Back clear={clear}/>)
    const todoElement = screen.getByTestId('back-test')
    expect(todoElement).toBeInTheDocument();
})