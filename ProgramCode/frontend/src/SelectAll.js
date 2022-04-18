import React from 'react'

export default function SelectAll({selectAll}) { // Allows user to select all categories
  return (
    <div data-testid='select-all-test' className='select_all_button'>
        <input type="submit" value="Select All" onClick={selectAll}/>
      </div>
  )
}

