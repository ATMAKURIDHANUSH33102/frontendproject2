import React, { Component } from 'react'
import'./css/Page4.css'
import { Link } from 'react-router-dom'


export default class 

extends Component {
    menuClick(){
        const navlist=document.getElementById("navlist");
        navlist.classList.toggle("active");
    }

  render() {
    return (
      <div>
        <header>
      <nav>
        <div className='logo'>My Website</div>
        <ul id="navlist">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div className='menu'onClick={()=>this.menuClick()}>&#9776;</div>
      </nav>
        </header>
        <section>
            <h1>Welcome to Responsive WebPage</h1>
            <p>This is an example page which can adopt any screen size</p>
        </section>
        <footer>
            copyright @ 2025 All rights reserved
        </footer>

      </div>
    )
  }
}
