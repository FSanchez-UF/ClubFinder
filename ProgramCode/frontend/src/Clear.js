import React from 'react'

export default function Clear({clear}) { // Clears all category selections when user clicks button
    return (
      <div data-testid='cleared-test' className='clear_button'>
        <input type="submit" value="Clear Selections" onClick={clear}/>
      </div>
    )
  }
