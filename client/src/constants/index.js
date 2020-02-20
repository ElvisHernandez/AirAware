export const aqiToCig = 1 / 72; // converts the AQI to approximate number of cigarettes smoked per day

export const hazardLevels = [
  {
    level: {
      hazard: 'Good',
      range: 50,
      color: 'green'
    }
  },
  {
    level: {
      hazard: 'Moderate',
      range: 100,
      color: 'rgb(219, 194, 4)'
    }
  },
  {
    level: {
      hazard: 'Unhealthy for sensitive groups',
      range: 150,
      color: 'orange'
    }
  },
  {
    level: {
      hazard: 'Unhealthy',
      range: 200,
      color: 'red'
    }
  },
  {
    level: {
      hazard: 'Very Unhealthy',
      range: 300,
      color: 'purple'
    }
  },
  {
    level: {
      hazard: 'Hazardous',
      range: 500,
      color: 'maroon'
    }
  }
];

export const monthToMonth = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};

export const solutionsObj = {
  "Good": [`Air quality is considered satisfactory, and air pollution poses little or no risk.`,
  `Weather Conditions: Cool summer temperatures, Windy conditions, Significant cloud cover, Heavy or steady precipitation`,
  `Recommended Actions: Keep cars and boats tuned up, Use environmentally safe paints and cleaning products,
  Conserve electricity-set A/C to highest comfortable level`],
  
  "Moderate": [`Air quality is acceptable; however, for some pollutants there may be a moderate health concern
  for a very small number of people. For example, people who are unusually sensitive to ozone may experience 
  respiratory symptoms. Unusually sensitive people should consider reducing prolonged or heavy outdoor exertion.`,
  `Weather Conditions: Temperatures in the upper 70's to lower 80's, Light to moderate winds,Partly cloudy or mostly sunny skies,
  Chance of rain or afternoon thunderstorms`,
  `Recommended Actions: Keep cars and boats tuned up, Use environmentally safe paints and cleaning products,
  Conserve electricity-set A/C to highest comfortable level`],
  
  "Unhealthy for sensitive groups": [`Although general public is not likely to be affected at this AQI range, people with 
  lung disease, older adults and children are at a greater risk from exposure to ozone, whereas persons with heart and lung 
  disease, older adults and children are at greater risk from the presence of particles in the air.`, 
  `Weather Conditions: Temperatures in the 80's and 90's, Light winds, Mostly sunny skies, Slight chance of afternoon thunderstorms.`,
  `Recommended Actions: Limit daytime driving, Limit vehicle idling, Refuel vehicles after dusk, Don’t “top off” your gas tank,
  Avoid congested periods, Use water-based paints, Use transit or car pool, Bike or walk for short trips, Use newest/best maintained car,
  Combine trips and share rides, Postpone using gasoline mowers, Barbecue without starter fluid`],
  
  "Unhealthy": [`Everyone may begin to experience some adverse health effects, and members of the sensitive groups may experience more serious effects.`,
  `Weather Conditions: Hot, hazy, and humid, Stagnant air, Sunny skies, Little chance of precipitation`,
  `Recommended Actions: Limit daytime driving, Limit vehicle idling, Refuel vehicles after dusk, Don’t “top off” your gas tank, Avoid congested periods,
  Use water-based paints, Use transit or car pool, Bike or walk for short trips, Use newest/best maintained car, Combine trips and share rides,
  Postpone using gasoline mowers, Barbecue without starter fluid`],
  
  "Very Unhealthy" : [`This would trigger a health alert signifying that everyone may experience more serious health effects.`,
  `Weather Conditions:Hot, hazy, and humid, Stagnant air, Sunny skies, Little chance of precipitation,`,
  `Recommended Actions: Limit daytime driving, Limit vehicle idling, Refuel vehicles after dusk, Don’t “top off” your gas tank,
  Avoid congested periods, Use water-based paints, Use transit or car pool, Bike or walk for short trips,
  Use newest/best maintained car, Combine trips and share rides, Postpone using gasoline mowers, Barbecue without starter fluid`],
  
  "Hazardous": [`This would trigger a health warnings of emergency conditions. The entire population is more likely to be affected.`,
  `Weather Conditions: Hot and very hazy, Extremely stagnant air, Sunny skies, No precipitation.`,
  `Recommended Actions: Limit daytime driving, Limit vehicle idling, Refuel vehicles after dusk, Don’t “top off” your gas tank
  Avoid congested periods, Use water-based paints, Use transit or car pool, Bike or walk for short trips, Use newest/best maintained car,
  Combine trips and share rides, Postpone using gasoline mowers, Barbecue without starter fluid`]
  }
  


