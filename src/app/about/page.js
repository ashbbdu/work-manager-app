import React from 'react'

async function takeTime () {
    await new Promise((resolve) => {
        setTimeout(resolve , 3000)
    })
}


const About =  async() => {
    await takeTime();
    throw new Error("Error in about page")
    return (
      <div>This is About Page</div>
    )
  }

export default About