import React from 'react'

const Birthdays = ({people}) => {
    return(
      <>
        {people.map((person) => {
          const {id, name, age, image} = person
          return(
            <div key={id}>
            <img src={image} alt="image" />
            <h1>{name}</h1>
            <h1>{age} years old</h1>
            </div>
          )
        })}
      </>
    );
}

export default Birthdays