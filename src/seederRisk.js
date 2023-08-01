const risks = {
    lowRisk: {
        D: ['multiship', 'mixedMultiShip', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'terrainFlight', 'mountainOperations', 'urbanOperations', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'CBRNE', 'nonLiveHoist', 'MTFGeneralTraining', 'pcGt60', 'pcGt30', 'piGt60', 'piGt30', 'nrcm1Gt60', 'nrcm2Gt60', 'nrcm3Gt60', 'nrcm1Gt30', 'nrcm2Gt30', 'nrcm3Gt30', 'vagueGt12', 'specificGt12', 'specific2to12', 'gt1000', 'lt1000', 'gt3', 'gt2', 'windGt30Hoist', 'windGt30', 'modTurbulenceIcing', 'oatNegative10Positive30'],
        UN: ['airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'pcGt30', 'nrcm1Gt60', 'nrcm2Gt60', 'nrcm3Gt60', 'nrcm1Gt30', 'nrcm2Gt30', 'nrcm3Gt30', 'vagueGt12', 'specificGt12', 'specific2to12', 'gt1000', 'gt3'],
        NG: ['multiship', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'nonLiveHoist', 'pcGt30', 'nrcm1Gt60', 'nrcm2Gt60', 'nrcm3Gt60', 'nrcm1Gt30', 'nrcm2Gt30', 'nrcm3Gt30', 'vagueGt12', 'specificGt12', 'specific2to12', 'gt1000', 'gt3', 'windGt30', 'modTurbulenceIcing']
    },
    moderateRisk: {
        D: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'dartOneTimeFlight', 'waterBucket', 'paradrops', 'rappelSpiesFries', 'fatCow', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin10', 'IGEwithin10', 'liveHoist', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS', 'pcGt90', 'piGt90', 'nrcm1Gt90', 'nrcm2Gt90', 'nrcm3Gt90', 'vague2to12', 'specificLt2', 'lt700', 'gt1', 'gustSpreadGt20', 'forecastThunderstorms'],
        UN: ['multiship', 'mixedMultiShip', 'dartOneTimeFlight', 'waterBucket', 'paradrops', 'rappelSpiesFries', 'externalLoads', 'fatCow', 'mountainOperations', 'urbanOperations', 'OGEwithin10', 'IGEwithin10', 'CBRNE', 'nonLiveHoist', 'liveHoist', 'gunneryLiveFire', 'MTFGeneralTraining', 'pcGt90', 'pcGt60', 'piGt90', 'piGt60', 'piGt30', 'nrcm1Gt90', 'nrcm2Gt90', 'nrcm3Gt90', 'vague2to12', 'specificLt2', 'lt1000', 'gt2', 'windGt30Hoist', 'windGt30', 'gustSpreadGt20', 'forecastThunderstorms', 'modTurbulenceIcing', 'oatNegative10Positive30'],
        NG: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'mixedMultiShip', 'dartOneTimeFlight', 'blackout', 'paradrops', 'rappelSpiesFries', 'fatCow', 'terrainFlight', 'mountainOperations', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'urbanOperations', 'confinedOperations', 'OGEwithin10', 'IGEwithin10', 'CBRNE', 'liveHoist', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS', 'MTFGeneralTraining', 'pcGt90', 'pcGt60', 'piGt90', 'piGt60', 'piGt30', 'nrcm1Gt90', 'nrcm2Gt90', 'nrcm3Gt90', 'vague2to12', 'specificLt2', 'lt1000', 'gt2', 'windGt30Hoist', 'gustSpreadGt20', 'forecastThunderstorms', 'oatNegative10Positive30']
    },
    highRisk: {
        D: ['OGEwithin5', 'IGEwithin5', 'CALFEX', 'vagueLt2', 'lt500', 'lt1'],
        UN: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin5', 'IGEwithin5', 'vagueLt2', 'lt700', 'lt500', 'gt1', 'lt1'],
        NG: ['waterBucket', 'OGEwithin5', 'IGEwithin5', 'CALFEX', 'vagueLt2', 'lt700', 'lt500', 'gt1', 'lt1']
    }
}

export default risks