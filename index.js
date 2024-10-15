// Code your solution in this file!
//jerks off distance in blocks
function distanceFromHqInBlocks(distance){
    if(distance>=42){
        return (distance - 42);
    }
    else if(distance <=42){
        return (42 - distance);
    }

}

//jerks off distance in feet
function distanceFromHqInFeet(distance){
    if(distance>=42){
        return (distance - 42)*(264);
    }
    else if(distance <=42){
        return (42 - distance)* (264);
    }

}

function distanceTravelledInFeet(distance1,distance2){
    if(distance1 >=distance2){
        return (distance1 - distance2)*(264);
    }
    else if(distance2 >=distance1){
        return (distance2 - distance1)* (264);
    }
}

//jerks off price according to distance
function calculatesFarePrice(start, destination) {
    // Assuming each block is equivalent to 264 feet.
    const distanceInFeet = Math.abs(start - destination) * 264;
  
    // Case 1: Free ride for distances under or equal to 400 feet
    if (distanceInFeet <= 400) {
      return 0;
    }
  
    // Case 2: Charge 2 cents per foot for distances between 400 and 2000 feet
    if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const chargeableFeet = distanceInFeet - 400; // First 400 feet are free
      return chargeableFeet * 0.02;
    }
  
    // Case 3: Flat rate of $25 for distances over 2000 feet but under or equal to 2500 feet
    if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    }
  
    // Case 4: No rides allowed for distances over 2500 feet
    if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    }
  }
  