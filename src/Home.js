import React from 'react'

const Home = (props) => {
  console.log(props);
  // setTimeout(() => {
  //   // props.history.push('/help') // move to the route we set
  //   props.history.goBack(); // go back to prev route in the stack
  // }, 1000);
  // pop up a question window when click other route link
  // props.history.block('are you sure wanna leave this page?')
  return (
    <div>
      <h1>{props.title}</h1>
      <h5>Please go to Help if you have any questions!
      </h5>
     
    </div>
  )
}

export default Home
