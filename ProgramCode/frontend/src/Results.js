import React from 'react'
import Result from './Result'

export default function Results({results}) { // Loops through results and returns a Result component
  return (
      results.map(result => {
          return <Result key={result._id} result={result} />
      })
  )
}
