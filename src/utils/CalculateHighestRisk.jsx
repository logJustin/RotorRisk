const riskOrder = ["L", "M", "M*", "H", "H*", "EH", "EH*"];

const CalculateHighestRisk = (risks) => {
    return risks.reduce((prevRisk, currentRisk) => {
        const prevIndex = riskOrder.indexOf(prevRisk);
        const currentIndex = riskOrder.indexOf(currentRisk);
        return prevIndex > currentIndex ? prevRisk : currentRisk;
    }, "L");
};
export default CalculateHighestRisk;