const [lowRisk, moderateRisk, highRisk] = ['#8CD47E', '#F8D66D', '#FF6961']
const aircrewMemberRiskColor = (hours, pilot) => {
    if (pilot && hours > 500) {
        return lowRisk; // If hours is greater than 500, return green color
    } else if (pilot && hours > 100) {
        return moderateRisk; // If hours is greater than 100, return yellow color
    } else if (!pilot && hours > 150) {
        return lowRisk; // If hours is greater than 500, return green color
    } else {
        return highRisk; // Default case for hours less than or equal to 100, return red color
    }
};
export default aircrewMemberRiskColor;