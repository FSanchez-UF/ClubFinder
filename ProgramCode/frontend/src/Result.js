import React from 'react'

export default function Result({result}) { // Outputs a single club's information
  return (
    <div data-testid='result-test' className='result'>
      <h2>{result.name}</h2>
      <p className='result_purpose'>Purpose: {result.purpose}</p>
      <p className='result_website'>Website: <a rel="noopener noreferrer" target="_blank" href={result.website}>{result.website}</a></p>
      <p className='result_category'>Category: {result.category}</p>
    </div>
  )
}
