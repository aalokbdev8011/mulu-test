import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() { 
    return ( 
      <>
      <div className="row mt-1">
        <div className="col-10"></div>
        <div className="col-2">
          <Link to="/"><div className="btn btn-primary">Logout</div></Link>
        </div>
      </div>
      </>
     );
  }
}
 
export default Header;