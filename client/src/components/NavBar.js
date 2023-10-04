import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar light" style={{backgroundColor:'#e3f2fd'}}>
        <div className="container-Fluid">
          {/* <a class="navbar-brand">CRUD App using MERN Stack</a> */}

           <button className="navbar-toggler" type="button"
           data-bs-toggle="collapse"
           data-bs-target="anavbarNav" aria-controls="navbarNav"
           aria-expanded="false" aria-label="Toggle navigatin">
            <span className="navbar-toggler-icon"></span>
           </button>

           <div className="collaspe navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Posts</a>
              </li>
            </ul>
           </div>
        </div>
      </nav>
    
    )
  }
}
