import React from "react";
import './SearchSection.css'
import { Icon } from '@iconify/react';

const SearchSection = () => {
  return (
    <>
      <div className="searchSection">
        <div className="pickUp">
            <label>
               <input type="radio" defaultChecked />
               Pick-Up
            </label>
            
            <div className="selectBoxes">
               <div className="location">
                  <span>Locations</span>
                  <select>
                     <option value="">Select your city</option>
                     <option value="lahore">Lahore</option>
                     <option value="islamabad">Islamabad</option>
                  </select>
               </div>
               <div className="date">
               <span>Date</span>
                  <select>
                     <option value="">Select your date</option>
                     <option value="1june">1 June</option>
                     <option value="2june">2 June</option>
                  </select>
               </div>
               <div className="time">
               <span>Time</span>
                  <select>
                     <option value="">Select your time</option>
                     <option value="8am">10am</option>
                     <option value="8pm">8pm</option>
                  </select>
               </div>
            </div>
        </div>

        <div className="exchange">
            <Icon className="exchangeBtn" icon="la:exchange-alt" rotate={1} />
        </div>

        <div className="dropOff">
            <label>
            <input type="radio" defaultChecked />
               Drop-off
            </label>
            
            <div className="selectBoxes">
               <div className="location">
                  <span>Locations</span>
                  <select>
                     <option value="">Select your city</option>
                     <option value="lahore">Lahore</option>
                     <option value="islamabad">Islamabad</option>
                  </select>
               </div>
               <div className="date">
               <span>Date</span>
                  <select>
                     <option value="">Select your date</option>
                     <option value="1june">1 June</option>
                     <option value="2june">2 June</option>
                  </select>
               </div>
               <div className="time">
               <span>Time</span>
                  <select>
                     <option value="">Select your time</option>
                     <option value="8am">10am</option>
                     <option value="8pm">8pm</option>
                  </select>
               </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
