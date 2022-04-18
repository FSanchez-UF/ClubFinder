import React from 'react'
import {Link} from 'react-router-dom'

export default function Submit({result}) { // Allows user to submit their choices and send user to the results page
  return (
    <div data-testid='submit-test' className='submit'>
      <Link to="/results"><input type="submit" value="Submit" onClick={result}/></Link>
    </div>
  )
}
