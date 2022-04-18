import React from 'react'
import { render, screen } from '@testing-library/react'
import ResultsPage from '../ResultsPage'
import clear from '../App'

test('Checks that a category renders properly', () => {
    
    const results = [{name:'AeroGator', purpose: '...', website: 'N/A', category: 'Engineering'}]

    render(<ResultsPage results={results} clear={clear} />)

    const todoElement1 = screen.getByTestId('results-page-test')
    expect(todoElement1).toBeInTheDocument();
})