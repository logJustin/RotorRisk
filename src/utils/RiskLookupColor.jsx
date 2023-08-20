
import risks from '../data/riskMatrix';
const [lowRisk, moderateRisk, highRisk, extremelyHighRisk] = ['#8CD47E', '#F8D66D', '#FF6961', '#653239']

const determineHighestRisk = (task, flightModes) => {
    if (!flightModes) {
        return '#424242'
    }
    // Initialize the highestRisk variable with the value of lowRisk
    let highestRisk = lowRisk;
    // Iterate over each riskLevel in the risks object
    for (const riskLevel in risks) {
        // Iterate over each mode in the risks[riskLevel] object
        for (const mode in risks[riskLevel]) {
            // Check if the flightModes array includes the current mode and if the nested risks[riskLevel][mode] array includes the task
            if (flightModes.includes(mode) && risks[riskLevel][mode].includes(task)) {
                // Update the highestRisk variable with the current riskLevel
                highestRisk = riskLevel;
                break;
            }
        }
    }

    // Check the value of highestRisk using a switch statement and return the corresponding risk level
    switch (highestRisk) {
        case 'lowRisk':
            return lowRisk;
        case 'moderateRisk':
            return moderateRisk;
        case 'moderateNonmitigableRisk':
            return moderateRisk;
        case 'highRisk':
            return highRisk;
        case 'highNonmitigableRisk':
            return highRisk;
        case 'extremelyHighRisk':
            return extremelyHighRisk;
        case 'extremelyHighNonmitigableRisk':
            return extremelyhighRisk;
    }
};


export default determineHighestRisk;