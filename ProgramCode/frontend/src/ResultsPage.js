import React from 'react'
import Results from './Results'
import Back from './Back'

export default function ResultsPage({results, clear}) { // Renders Back Component and results
  return (
    <div data-testid='results-page-test' className='ResultsPage'>
      <Back clear={clear}/>
      <Results results={results} />
    </div>
  )
}
