import React from 'react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <>
    <div className="top-banner-inner-pages">
        <div id="title-inner-pages">Air Quality Solutions</div>
        </div>
        <div className="solutions-body">
          <h6>
            1'st Step is Knowing... AQI What?
            </h6>
          <p>
            AQI, also known as Air Quality Index, is an index for reporting daily air quality. It tells you how clean or polluted your air is, and what associated health effects might be.
            <br></br><br></br><b>Good</b> - 0 to 50	
            <br></br><b>Moderate</b> - 51 to 100 
            <br></br><b>Unhealthy for Sensitive Groups</b> - 101 to 150	
            <br></br><b>Unhealthy</b> - 151 to 200
            <br></br><b>Very Unhealthy</b> - 201 to 300
            <br></br><b>Hazardous</b> - 301-500
            <br></br><br></br>
            Read more on what each means here: <a href="https://airnow.gov/index.cfm?action=aqibasics.aqi">Air Quality Index</a>
            </p>
            <br></br><br></br>
            <h6>Some Every Day Solutions</h6>
            <br></br>
            <h6>Plants</h6>
            <p>
            Through photosynthesis, they convert the carbon dioxide we exhale into fresh oxygen, and they can also remove toxins from the air we breathe. ... Research has found that soil microorganisms in potted plants also play a part in cleaning indoor air. The NASA studies on indoor pollution done in 1989 recommends 15 to 18 plants in 6 to 8-inch- diameter containers to clean the air in an average 1,800 square foot house. That's roughly one plant per 100 square feet of floor space.
              </p>
            <h6>Exercise</h6>
            <p>
            After all, pollution is an inflammatory trigger, and exercise is an anti-inflammatory. In November, Brazilian researchers published a study in which mice inhaled several types of air pollutants while running on a treadmill or not exercising. The pollution caused inflammation in the airways and throughout the body, but exercise inhibited both these effects.
              </p>
            <h6>Better Ventilation</h6>
            <p>
            Most home heating and cooling systems, including forced air heating systems, do not mechanically bring fresh air into the house. Opening windows and doors, operating window or attic fans, when the weather permits, or running a window air conditioner with the vent control open increases the outdoor ventilation rate. Local bathroom or kitchen fans that exhaust outdoors remove contaminants directly from the room where the fan is located and also increase the outdoor air ventilation rate.
            </p>
        </div>
    </>
  );
};

export default Solutions;
