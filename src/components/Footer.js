import React, { useState } from 'react';

const Footer = () => {
    let Persons = [
        {
            name: "Spring ",
            age : 24,
        },
        {
            name: "Spring 2",
            age : 25,
        },
        {
            name: "Spring 3",
            age : 26,
        },
        {
            name: "Spring 4",
            age : 27,
        },
    ];

    const PersonElements = () => {
        const [count, setCount] = useState(0);
        return (
            <>
                <button onClick={() => setCount(count + 1)}>Click button</button>
                <div className='four-columns'>
                    {
                        Persons.map(
                            (person,index) => (
                                <div key={index} className='column'>
                                    <h3>{person.name}</h3>
                                    <h5>{person.age}</h5>
                                </div>
                            )
                        )
                    }
                </div>
            </>
        );
    };

  return (
   <>
    <div className='s-48'></div>
    <div className='wrapper'>
     <h2 className=''>Footer Component</h2>
     <PersonElements />
     </div>
   </>
  )
}


export default Footer