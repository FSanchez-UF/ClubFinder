import React from 'react'
import {Link} from 'react-router-dom'

export default function Back({clear}) { // Creates back button that links to homepage
    return (
        <div data-testid='back-test' className='back'>
            <Link to="/"><input type="button" value="Back" onClick={clear}/></Link>
        </div>
    )
}