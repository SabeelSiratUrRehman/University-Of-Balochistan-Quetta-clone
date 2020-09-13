import React from 'react'
import './Header.css';
function Header(){
    return(
        <div className="Header">
        <div className="Headers">
          <img src="/images/png.png"alt=""style={{width:"100%",height:"25rem"}}/>
        </div>
        <br></br>
  <div className="navbar">
  <a href="/About">About</a>
  <a href="/Admission">Admission</a>
  <a href="/Administration">Administration</a>
  <div className="dropdown">
    <button className="dropbtn">Departments
    &#9660;
    </button>
    <div className="dropdown-content">
      <a href="/ms">Facality of Management Science</a>
      <a href="/ss">Facality of Social Science</a>
      <a href="/foe">Facality of Education & Ier</a>
    </div>
  </div>
  <a href="/Library">Libaray</a>
  <div className="dropdown">
    <button className="dropbtn">Publication
    &#9660;
    </button>
    <div className="dropdown-content">
      <a href="/Journals">Journals</a>
      <a href="/Newsletter">News Letters</a>
      <a href="/Reports">Reports</a>
      <a href="/Prospective">Prospective</a>
      <a href="/Video">Videos</a>
    </div>
  </div>
  <a href="qaad">QAAD</a>
  <a href="ftdc">FTDC</a>
  <a href="oricy">ORIC</a>
  <a href="gso">GSO</a>
  <a href="ugso">UGSO</a>
</div>
<br></br>
<div className="Notification">
  LATEST INFORMATION
</div>
<br></br>
  <div className="Alert">
    <div className="alert"> 
     Yeah! Am Meer-Sabeel-Bugti ( Backbencher- Tu Kaise Hain Ap Log ? ) - <a href="readmore"> Read More</a>
  </div>
  </div>
  <br></br>
 </div>
    )
}
export default Header;