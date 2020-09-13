import React from 'react'
import './main.css'
import { FaHome } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import { FaStackOverflow } from "react-icons/fa";
import { FaFileImage} from "react-icons/fa";
import { FaDownload} from "react-icons/fa";
import { AiFillFile} from "react-icons/ai";
import { VscVm} from "react-icons/vsc";
import { VscFiles} from "react-icons/vsc";
import { VscInbox} from "react-icons/vsc";
import { TiMortarBoard } from "react-icons/ti";
import { MdBusinessCenter } from "react-icons/md";

function Main(){
    return(
    <div className="Main">
     <div className="Sidebar">
       <div className="Button">
         Quick Links
        </div>
        <div className="Icon">
          <div className="home">
            <a href="Home">
            <FaHome/>Home
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <VscInbox/>-Info Board
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <VscMail/>-Uob Emails
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <TiMortarBoard/>-Uob LMS
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <AiFillFile/>-Results
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <MdBusinessCenter/>-Software
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <VscVm/>-Digital Library
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <FaStackOverflow/>-Linkages
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <FaDownload/>-Prospectus
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <VscFiles/>-DIT
            </a>
          </div>
          <div className="home">
            <a href="Home">
            <FaFileImage/>-Picture Gallery
            </a>
          </div>
        </div>
     </div>
      <div className="Detail">
      <div id="slider">
      {/* <img src="/images/dp.jpg"alt="dp"style={{width: "100%",height: "50rem",objectFit:"fill"}}/> */}
      <figure>
      <img src="/images/img2.jpg" alt="img"/>
       <img src="/images/img3.jpg" alt="img"/>
      <img src="/images/img4.jpg" alt="img"/>
     <img src="/images/img5.jpg" alt="img"/>
     <img src="/images/img6.jpg" alt="img"/>
     </figure>
      </div>
      <div className="About">
      <div className="AboutUob">
        ABOUT UNVERSITY
      </div>
      <div className="about-detail">
      The University of Balochistan, Quetta is the oldest educational Institution of higher learning 
      of the province entrusted with the responsibilities to educate and train the potentially talented
       human resource and manpower to meet the emerging needs of the industry and society.It plays a 
       vital role in development of Pakistan in general and Balochistan in particular
      .The province of Balochistan is passing through a process of rapid socio-economic
      </div>
      </div>
      </div>
     <div className="notification">
       <div className="Button">
         News & Events
        </div>
        <br></br>
      <div className="link">
        <br></br>
        <br></br>
        <a href="uob link">Ehsaas Undergraduate Scholarship for Fall 2020 and Spring 2020 & EHSAAS Undergraduate Scholarship Program, Recommended Students</a>
        <br></br>
        <br></br>
        <a href="uob link">Objection List of B.A (Annual) Private 2020</a>
        <br></br>
        <br></br>
        <a href="uob link">Notification for Admission Spring 2020 M.Phil / MS/PhD</a>
        <br></br>
        <br></br>
        <a href="uob link">Interview Date of Admission in Econimics & BSCS / BSIT (Computer Science)</a>
        <br></br>
        <br></br>
        <a href="uob link">Circular: Postponement of the Final term Examinations (For Details Click)</a>
        <br></br>
        <br></br>
        <a href="uob link">Date Sheets of MBBS 1st Prof (A) 2018, 2nd Prof (A) 2016, 3rd Prof (A) 2016, Final Prof Annual 2016</a>
        <br></br>
        <br></br>
        <a href="uob link">Interview Date of Admission in BSCS / BSIT (Computer Science)</a>
        <br></br>
        <br></br>
        <a href="uob link">Online Training on "Research Proposal Writings" & One day Training on "Procedures of Formal letters"</a>
      </div>
  </div>
</div>
    )
}
export default Main;