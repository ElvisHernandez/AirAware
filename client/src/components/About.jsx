import React from 'react';
import AcceusJulio from '../images/AboutImages/AcceusJulio.jpg';
import BashirIman from '../images/AboutImages/BashirIman.jpg';
import HernandezElvis from '../images/AboutImages/HernandezElvis.jpg';
import KeranoraKrisi from '../images/AboutImages/KeranoraKrisi.jpg';

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

        <div className="mission-statement">
        <p>
            
            {/* Our application is in an experimental phase as we spend 
            time and resources contributing to improve 
            how we retrieve up to date forecasts and more 
            comprehensive information regarding the air quality and pollutants effecting 
            your local area.  */}
          </p>
        </div>
      </div>
      <div className="about-body2">
        <p className="location">AirAware is headquarted in Wynwood</p>
      </div>
  
      <p className="group-members"> LEADERSHIP</p>
      <div id="about-images">

        <a className="portrait-link" href="https://www.linkedin.com/in/julio-acceus-68901b98/" target="_blank">
          <img id="about-person" src={AcceusJulio}  alt="image of Juluio" />
          <p>Julio Acceus</p>
        </a>
        <a className="portrait-link" href="https://www.linkedin.com/in/imanbashir/" target="_blank">
          <img id="about-person" src={BashirIman} alt="image of Iman" />
          <p>Iman Bashir</p>
        </a>
        <a className="portrait-link" href="https://www.linkedin.com/in/elvis-hernandez-9669a618a/" target="_blank">
          <img id="about-person" src={HernandezElvis} alt="image of Elvis" />
          <p>Elvis Hernandez</p>
        </a>
        <a className="portrait-link" href="https://www.linkedin.com/in/krisi-keranova-9bbba819/" target="_blank">
          <img id="about-person" src={KeranoraKrisi} alt="image of Krisi" />
          <p>Krisi Keranova</p>
        </a>
      </div>
      <div className="hr"><hr /></div>
 
      <img href="logo.png"/>
    </>
  );
};

export default About;
