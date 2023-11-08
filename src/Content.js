import React from 'react'

const Content = () => {
    const handleNameChange = () =>{
        const names = ['bob', 'dave', 'kevin']
        const int = Math.floor(Math.random()*3)  // generates a random integer
        return names[int];
      }
  return (
    <main>
        <p>
            hello {handleNameChange()}
        </p>
    </main>
  )
}

export default Content