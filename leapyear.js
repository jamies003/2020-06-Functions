// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year evenly divisible by 400


function isLeap(year) {
    
  if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0)
              return "leap Year.";
          } else {
              return "Not Leap Year";
          }
      } else {
          return "Leap Year.";
      } 
  } else {
      return "Not Leap Year.";
  };