const AircrewRiskLookupValue = (hours, pilot) => {
    if (hours === undefined) {
        return 'L'; // If hours is undefined, return low risk
    } else if (pilot && hours > 499) {
        return 'L pilot'; // If hours is greater than 500, return green color
    } else if (pilot && hours > 100) {
        return 'M'; // If hours is greater than 100, return yellow color
    } else if (!pilot && hours > 149) {
        return 'L not pilot'; // If hours is greater than 149, return green color
    } else {
        return 'H'; // Default case for hours less than or equal to 100, return red color
    }
};
export default AircrewRiskLookupValue;
