const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 === 0; 
    const isYearDivisiblebyOneHundrend = year % 100 === 0; 
    const isYearDivisiblebyFourHundrend = year % 400 === 0;

    if (
        isYearDivisibleByFour && 
        (!isYearDivisiblebyOneHundrend || isYearDivisiblebyFourHundrend)
    ) {
        return true; 
    } else {
        return false;
    } 

};

// Do not edit below this line
module.exports = leapYears;
