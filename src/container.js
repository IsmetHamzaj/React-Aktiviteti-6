import data from './data'
import Birthdays from './birthdays'
import React, { useState } from 'react'
import './container.css'
function Container() {
    const [people, setPeople] = useState(data)
    return (
        <div>
        <h1 className="birthday">{people.length} birthdays today</h1>
        <Birthdays people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
        </div>
    )
}


export default Container