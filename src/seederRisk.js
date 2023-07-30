const risks = {
    lowRisk: {
        D: ['multiship', 'mixedMultiShip', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'terrainFlight', 'mountainOperations', 'urbanOperations', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'CBRNE', 'nonLiveHoist', 'MTFGeneralTraining'],
        UN: ['airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC'],
        NG: ['multiship', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'nonLiveHoist']
    },
    moderateRisk: {
        D: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'dartOneTimeFlight', 'waterBucket', 'paradrops', 'rappelSpiesFries', 'fatCow', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin10', 'IGEwithin10', 'liveHoist', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS'],
        UN: ['multiship', 'mixedMultiShip', 'dartOneTimeFlight', 'waterBucket', 'paradrops', 'rappelSpiesFries', 'externalLoads', 'fatCow', 'mountainOperations', 'urbanOperations', 'OGEwithin10', 'IGEwithin10', 'CBRNE', 'nonLiveHoist', 'liveHoist', 'gunneryLiveFire', 'MTFGeneralTraining'],
        NG: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'mixedMultiShip', 'dartOneTimeFlight', 'blackout', 'paradrops', 'rappelSpiesFries', 'fatCow', 'terrainFlight', 'mountainOperations', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'urbanOperations', 'confinedOperations', 'OGEwithin10', 'IGEwithin10', 'CBRNE', 'liveHoist', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS', 'MTFGeneralTraining']
    },
    highRisk: {
        D: ['OGEwithin5', 'IGEwithin5', 'CALFEX'],
        UN: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin5', 'IGEwithin5'],
        NG: ['waterBucket', 'OGEwithin5', 'IGEwithin5', 'CALFEX']
    }
}

export default risks