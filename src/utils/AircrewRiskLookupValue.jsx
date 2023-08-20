const AircrewRiskLookupValue = (hours, pilot, timeInAO) => {
    if (pilot) {
        if (timeInAO) {
            if (hours === undefined || hours > 499) {
                return 'L'; // Low risk
            } else if (hours > 100) {
                return 'M'; // Medium risk
            }
        } else {
            if (hours === undefined || hours > 1000) {
                return 'L'; // Low risk
            } else {
                return 'M'; // Medium risk
            }
        }
    } else {
        if (timeInAO) {
            if (hours === undefined || hours > 149) {
                return 'L'; // Low risk
            } else {
                return 'M'; // Medium risk
            }
        } else {
            if (hours === undefined || hours > 499) {
                return 'L'; // Low risk
            } else {
                return 'M'; // Medium risk
            }
        }
    }
};

export default AircrewRiskLookupValue;
