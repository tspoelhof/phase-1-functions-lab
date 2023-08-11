// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue -  42);
  }

  function distanceFromHqInFeet(someValue) {
    const blocksFromHQ = distanceFromHqInBlocks(someValue);
    return blocksFromHQ * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) *264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const feetDistance = distanceTravelledInFeet(start, destination);
        if (feetDistance <=400) {
            return 0;;
        }
        else if (feetDistance <= 2000) {
            return (feetDistance -400) * 0.02;
        }
        else if (feetDistance >=2001 && feetDistance <= 2500) {
            return 25;
        }
        else {
            return "cannot travel that far";
        }
  }