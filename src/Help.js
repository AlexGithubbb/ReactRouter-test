import React from 'react';
import {Route, Link} from 'react-router-dom';


const Customer = () => <h1 className="green">Customer help goes here!</h1>
const Host = () => <h1 className="red">Host help goes here!</h1>

const Help = () => {
  return (
    <div>
      <h1>Help Header</h1>
      
      <div>
        <Link to="/help/customer"><button className="btn waves-light waves-effect">Customer</button></Link>
        <Link to="/help/host"><button className="btn-floating waves-effect waves-light red">Host</button></Link>
      </div>
      <a>Image goes here</a>
      <Route path="/help/customer" component={Customer} />
      <Route path="/help/host" component={Host} />

      <h1>Help Footer</h1>
    </div>
  )
}

export default Help
