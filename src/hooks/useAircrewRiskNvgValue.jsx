const useAircrewRiskNvgValue = (NGHours, timeInAO) => {
    if (timeInAO) {
        if (NGHours === undefined || NGHours > 99) {
            return 'L'; // Low risk
        } else {
            return 'M'; // Medium risk
        }
    } else if (!timeInAO) {
        if (NGHours === undefined || NGHours > 200) {
            return 'L'; // Low risk
        } else {
            return 'M'; // Medium risk
        }
    }
};

export default useAircrewRiskNvgValue;
