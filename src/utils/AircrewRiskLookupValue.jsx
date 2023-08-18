const AircrewRiskLookupValue = (hours, pilot) => {
    if (hours === undefined) {
        return 'L'; // If hours is undefined, return low risk
    } else if (pilot && hours > 499) {
        return 'L'; // If hours is greater than 500
    } else if (pilot && hours > 100) {
        return 'M'; // If hours is greater than 100
    } else if (!pilot && hours > 149) {
        return 'L'; // If hours is greater than 149
    } else {
        return 'H'; // Default case for hours less than or equal to 100
    }
};
export default AircrewRiskLookupValue;
