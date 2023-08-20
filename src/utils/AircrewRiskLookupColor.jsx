const [lowRisk, moderateRisk, highRisk, extremelyHighRisk] = ['#8CD47E', '#F8D66D', '#FF6961', '#653239']
// const aircrewMemberRiskColor = (hours, pilot, timeInAO) => {
//     if (timeInAO > 25) {
//         if (hours === undefined || (pilot && hours > 499) || (!pilot && hours > 149)) {
//             return lowRisk; // Low risk
//         } else if (pilot && hours > 100) {
//             return moderateRisk; // Medium risk
//         }
//     } else if (timeInAO < 26) {
//         if (hours === undefined || (pilot && hours > 1000) || (!pilot && hours > 500)) {
//             return lowRisk; // Low risk
//         } else if (pilot && hours <= 1000) {
//             return moderateRisk; // Medium risk
//         }
//     }

const aircrewMemberRiskColor = (risk) => {
    if (risk === 'L') {
        return lowRisk
    } else if (risk === 'M') {
        return moderateRisk
    } else if (risk === 'H') {
        return highRisk
    }

};
export default aircrewMemberRiskColor;