//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const EARTH_TOTAL_SECONDS = 31557600;

class Planet {
  constructor(name, earthYears) {
    this.name = name;
    this.earthYears = earthYears;
  }

  getPlanetTotalSeconds() {
    return EARTH_TOTAL_SECONDS * this.earthYears;
  }

  getFinalAge(ageInSeconds, planetTotalSeconds) {
    return Number((ageInSeconds / planetTotalSeconds).toFixed(2));
  }
}

const PLANET_EARTH_YEAR = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

export const age = (planet, ageInSeconds) => {
  const PLANET = new Planet(planet, PLANET_EARTH_YEAR[planet]);
  return PLANET.getFinalAge(ageInSeconds, PLANET.getPlanetTotalSeconds());
};