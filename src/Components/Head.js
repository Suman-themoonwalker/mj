import React,{Component} from 'react';
export class Head extends Component{
    render(){
        return(
<div className="nav-header">
        <nav>
        <ul>
          <li><a href="#">THE ARTIST&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">MJ STORE&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">MJ ONE&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">MJ THE MUSICAL&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">COMMUNITY&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="#">FAQ&nbsp;&nbsp;&nbsp;</a></li>
          <li className="right-side"><a href=""><i className="fas fa-user-tie"></i><b> LOG IN</b>&nbsp;&nbsp;</a><a href="">&nbsp;&nbsp;<i class="fas fa-user-plus"></i> <b>&nbsp;SIGN UP</b>&nbsp;&nbsp;</a></li>
        </ul>
        </nav>

    <div className="toggler">
    <nav className="navbar navbar-inverse">
    <div className="container-fluid" >
    <ul className="nav navbar-nav mx-auto">
    <li id="course" className="dropdown"><i className="fas fa-bars"></i><span className="caret"></span>
      <ul className="dropdown-menu">
        <li><a href="#">THE ARTIST</a></li>
        <li><a href="#">MJ STORE</a></li>
        <li><a href="#">MJ ONE</a></li>
        <li><a href="#">MJ THE MUSICAL</a></li>
        <li><a href="#">COMMUNITY</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </li>
    </ul>
    </div>
    </nav>
    </div>
    <div  className="logo">
    <label><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhMGnRQ0RFXYeE5CU_JXk5T0B0g9jn0dOLw&usqp=CAU"/></a></label>
    </div>
    </div>
    );
    }
}