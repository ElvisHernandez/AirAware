import React from 'react';
import { theTeam } from "../../constants/constants.js"

const About = () => {
  return (
    <>
        <div className="top-banner-inner-pages">
        <div id="title-inner-pages">Our Mission is to Provide Awareness on Air Solutions</div>
        </div>
      <div className="about-main">
        <div className="about-body">
          <p id="app-description">
            AirAware is a consulting company that provides businesses and
            individuals with everyday air pollution information in the United
            States and strategies about air pollution.

            Our application is in an experimental phase as we spend 
            time and resources contributing to improve 
            how we retrieve up to date forecasts and more 
            comprehensive information regarding the air quality and pollutants effecting 
            your local area. 
          </p>
        </div>

      </div>
      <div className="about-body2">
        <p className="location">AirAware is headquarted in Wynwood</p>
      </div>
  
      <p className="group-members"> LEADERSHIP</p>
      <div id="about-images">

        {theTeam.map( ({name, picPath, linkedin}, index) => {
          return(
          <a key={index} className="portrait-link" href={linkedin} target="_blank">
            <img id="about-person" src={picPath} alt={`${name}`} />
            <p>{name}</p>
          </a>
          )
        })}
      </div>
      <div className="hr"><hr /></div>
     </>
  );
};

export default About;
