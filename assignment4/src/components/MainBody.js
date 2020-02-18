import React from 'react';
import './MainBody.css';
import him from '../assets/him.png';
import getDateAndTime from '../assets/button';

function MainBody () {
   return(
      <main className="MainBody">
         <h2 className="b-h2">Welcome to Beer Pub - AD320</h2> 
         <img className="b-img" src={him} alt="Founder"></img>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
            in magna ante. In risus orci, fermentum quis arcu ut, varius auctor dui. 
            Curabitur eget condimentum nulla. <strong><a href="https://github.com/denylie/AD320-DenyLie-Assignment2" target="blank"> 
            My github.</a></strong> Pellentesque 
            habitant morbi tristique senectus et netus et malesuada fames ac t
            urpis egestas. Proin non tristique urna. Pellentesque id tincidunt 
            ligula. 
         </p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
            in magna ante. In risus orci, fermentum quis arcu ut, varius auctor dui. 
            Curabitur eget condimentum nulla. <strong><a href="https://www.toptal.com/software/definitive-guide-to-datetime-manipulation" target="blank"> 
            Date & Time manipulation in JS.</a></strong> Pellentesque 
            habitant morbi tristique senectus et netus et malesuada fames ac t
            urpis egestas. Proin non tristique urna. Pellentesque id tincidunt 
            ligula. 
         </p>
         <input type="button" value="Date & Time" id="display" onClick={getDateAndTime}></input>
         {/* there is also an input type checkbox to create checkbox*/}
      </main>
   );
}

export default MainBody;