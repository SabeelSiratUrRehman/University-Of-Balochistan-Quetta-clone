import React from 'react'
import './Footer.css'
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
function Footer(){
    return( 
     <footer className="Footer">
        <div className="About">
            <div className="Name">
                <div className="Abouts">
            University Of Balochistan,
            <div className="quetta"> Quetta.</div>
            </div>
            <br></br>
            <div className="saryab">
            <TiLocationOutline/>Sariab Road Quetta,
            </div>
            <br></br>
            <div className="saryab">
            ©2020 All Rights Reserved
            </div>
            </div>
        </div>
        <div className="Contact">
            <div className="lnkss">
                <div className="webdeveloper">
                    <a href="ebuddy">
                        Home  |
                    </a>
                    <a href="ebuddy">
                        Contact Us  |
                    </a>
                    <a href="ebuddy">
                        Web Developer  |
                    </a>
                    <a href="ebuddy">
                        E-Brary  |
                    </a>
                </div>
            <br></br>
            <div className="phone">
            <AiFillPhone color="white"/> Information Office +92 81-9211124
            </div>
            <br></br>
            <div className="phone">
           <AiFillPhone color="white"/> Main Exchange +92 81-9211008
            </div>
            <br></br>
            <div className="phone">
           <AiOutlineMail color="white"/> <a href="Email">dit@um.uob.edu.pk</a>
            </div>
            </div>
        </div>
        <div className="Map">
        <div className="map">
            <img src="/images/map.jpg"alt="map"style={{width:"100%",height:"15rem"}}/>
        </div>
        <br></br>
        <div className="linkss">
            <div className="icons">
            <FaYoutube color="red"fontSize="4rem"/>
            </div>
            <div className="icons">
            <FaTwitter color="aqua"fontSize="4rem"/>
            </div>
            <div className="icons">
            <FaFacebookSquare color="blue"fontSize="4rem"/>
            </div>
            <div className="icons">
            <FaGooglePlus color="pink"fontSize="4rem"/>
            </div>
        </div>
        </div>
     </footer>
    )
}
export default Footer;