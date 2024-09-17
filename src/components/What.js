import '../styles/What.css';
import Img from '../assets/what_img.jpg';

function What() {
    return (
      <div className="What">
        <div id='WhatImg'>
            <img alt='' src={Img}></img>
        </div>
        {/* <div>
            <h1></h1>
        </div> */}
      </div>
    );
  }
  
  export default What;