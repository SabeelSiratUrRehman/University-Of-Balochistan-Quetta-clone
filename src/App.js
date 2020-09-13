import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Index from './Information/Index'
import Icon from './secondlastfooter/Icon'
import Button from './Button/Button'
import Footer from './Footer/Footer'
function App() {
    return (
     <div className="App">
         <Header/>
         <Main/>
         <Index/>
         <Icon/>
         <Button/>
         <Footer/>
     </div>
    )
}
export default App
