
import risks from '../data/riskMatrix';

const useHighestRiskValue = (task, flightModes) => {
    let highestRisk = ''
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
            return 'L';
        case 'moderateRisk':
            return 'M';
        case 'moderateNonmitigableRisk':
            return 'M*';
        case 'highRisk':
            return 'H';
        case 'highNonmitigableRisk':
            return 'H*';
        case 'extremelyHighRisk':
            return 'EH';
        case 'extremelyHighNonmitigableRisk':
            return 'EH*';
    }
};


export default useHighestRiskValue;