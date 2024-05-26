const [lowRisk, moderateRisk, highRisk, extremelyHighRisk] = ['#8CD47E', '#F8D66D', '#FF6961', '#653239']

const useAircrewRiskColor = (risk) => {
    if (risk === 'L') {
        return lowRisk
    } else if (risk === 'M') {
        return moderateRisk
    } else if (risk === 'H') {
        return highRisk
    }

};
export default useAircrewRiskColor;