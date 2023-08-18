const AircrewRiskLookupValueNG = (NGHours, timeInAO) => {
    if (timeInAO > 25) {
        if (NGHours > 99) {
            return 'L'
        } else if (NGHours < 100) {
            return 'M'
        }
    } else if (timeInAO < 26) {
        if (NGHours > 199) {
            return 'L'
        } else if (NGHours < 200) {
            return 'M'
        }
    }
}
export default AircrewRiskLookupValueNG;
