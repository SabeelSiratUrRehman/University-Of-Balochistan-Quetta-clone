import React from 'react'
import './style.css'
function Index(){
    return (
        <div className="Index">
        <div className="lside">
        <div className="Buttone">
        Fee Vouchers
        </div>
        <div className="images">
            <img src="/images/dues.jpg"style={{width:"100%",height:"20rem"}} alt="dues"/>
        </div>
        <div className="definations">
        <br></br>        
        Examination Fee
        <br></br>        
        Registration Fee
        <br></br> 
        Admission Fee
        <br></br> 
        Migration Fee
        <br></br> 
        Hostel Fee
        <br></br> 
         Others...
         <p></p>
         <button className="btn">Genrate Challan</button>
        </div>
        </div>
        <div className="cmain">
        <div className="containter1">
        <div className="Buttonss">
         VISION
        </div>
        <div className="defination">
        To be a model public University
        providing affordable, quality, 
        higher 
        education oppertunities to develop the potentially rich human 
        resouce in Balochistan through knowledge-center teaching 
        and research while maintaining and fostering <br></br>high levels of ethical 
        and professional standards and promoting national identity.
        </div>
        </div>
        <div className="containter1">
        <div className="Buttonss">
         MISSION
        </div>
        <div className="defination">
        Functioning as a student-centric institution dedicated to academic excellence, 
        tolerance and fairness.
        <p></p>
        Maintaining and fostering highest ethical and 
        professional values while teaching students to seek knowledge analytically, 
        be creative, communicate effectively and become technologically literate 
        to meet the emerging needs of our society within the global village.
        </div>
        <button className="btn">
            Read More
        </button>
        </div>
        <div className="containter1">
        <div className="Buttonss">
         CORE VALUES
        </div>
        <div className="defination">
        To be a model public University providing affordable, quality, 
        higher education oppertunities to develop the potentially rich human 
        resouce in Balochistanthrough knowledge-centered teaching and research 
        while maintaining and fostering high levels of ethical 
        and professional standards and promoting national identity.
        </div>
        </div>
        </div>
        <div className="rside">
        <div className="Buttone">
        Vice Chancellor Message
        </div>
        <div className="images">
            <img src="/images/vc.jpg"style={{width:"100%",height:"20rem"}}alt="vc"/>
        </div>
        <div className="definations">
        <br></br>        
        No society can develop <br></br>unless know the arts of <br></br>development and the <br></br>science of education. 
        The<br></br> world has tremendously...
        <br></br>
        <button className="btn">
         Read More
        </button>
        </div>
        </div>
        </div>
    )
}
export default Index