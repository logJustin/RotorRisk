const risks = {
    lowRisk: {
        D: ['multiship', 'mixedMultiShip', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'terrainFlight', 'mountainOperations', 'urbanOperations', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'CBRNE', 'nonLiveHoist', 'MTFGeneralTraining', 'pcGt60', 'pcGt30', 'piGt60', 'piGt30', 'nrcm1Gt60', 'nrcm2Gt60', 'nrcm3Gt60', 'nrcm1Gt30', 'nrcm2Gt30', 'nrcm3Gt30', 'vagueGt12', 'specificGt12', 'specific2to12', 'gt1000', 'lt1000', 'gt3', 'gt2', 'windGt30Hoist', 'windGt30', 'modTurbulenceIcing', 'oatNegative10Positive30'],
        UN: ['airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'pcGt30', 'nrcm1Gt60', 'nrcm2Gt60', 'nrcm3Gt60', 'nrcm1Gt30', 'nrcm2Gt30', 'nrcm3Gt30', 'vagueGt12', 'specificGt12', 'specific2to12', 'gt1000', 'gt3'],
        NG: ['multiship', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'nonLiveHoist', 'pcGt30', 'nrcm1Gt60', 'nrcm2Gt60', 'nrcm3Gt60', 'nrcm1Gt30', 'nrcm2Gt30', 'nrcm3Gt30', 'vagueGt12', 'specificGt12', 'specific2to12', 'gt1000', 'gt3', 'windGt30', 'modTurbulenceIcing'],
        true: ['gt25IllumAndgt30degrees'],
        false: ['altRequired']
    },
    moderateRisk: {
        D: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'dartOneTimeFlight', 'waterBucket', 'paradrops', 'rappelSpiesFries', 'fatCow', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin10', 'IGEwithin10', 'liveHoist', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS', 'pcGt90', 'piGt90', 'nrcm1Gt90', 'nrcm2Gt90', 'nrcm3Gt90', 'vague2to12', 'specificLt2', 'gustSpreadGt20',],
        UN: ['multiship', 'mixedMultiShip', 'dartOneTimeFlight', 'waterBucket', 'paradrops', 'rappelSpiesFries', 'externalLoads', 'fatCow', 'mountainOperations', 'urbanOperations', 'OGEwithin10', 'IGEwithin10', 'CBRNE', 'nonLiveHoist', 'liveHoist', 'gunneryLiveFire', 'MTFGeneralTraining', 'pcGt90', 'pcGt60', 'piGt90', 'piGt60', 'piGt30', 'nrcm1Gt90', 'nrcm2Gt90', 'nrcm3Gt90', 'vague2to12', 'specificLt2', 'windGt30Hoist', 'windGt30', 'gustSpreadGt20', 'modTurbulenceIcing', 'oatNegative10Positive30'],
        NG: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'mixedMultiShip', 'dartOneTimeFlight', 'blackout', 'paradrops', 'rappelSpiesFries', 'fatCow', 'terrainFlight', 'mountainOperations', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'urbanOperations', 'confinedOperations', 'OGEwithin10', 'IGEwithin10', 'CBRNE', 'liveHoist', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS', 'MTFGeneralTraining', 'pcGt90', 'pcGt60', 'piGt90', 'piGt60', 'piGt30', 'nrcm1Gt90', 'nrcm2Gt90', 'nrcm3Gt90', 'vague2to12', 'specificLt2', 'windGt30Hoist', 'gustSpreadGt20', 'oatNegative10Positive30'],
        true: ['altRequired', 'lt25IllumAndlt30degrees'],
        false: []
    },
    moderateNonmitigableRisk: {
        D: ['forecastThunderstorms', 'lt700', 'gt1'],
        UN: ['forecastThunderstorms', 'lt1000', 'gt2'],
        NG: ['forecastThunderstorms', 'lt1000', 'gt2'],
        true: ['gt25IllumAndgt30degreesLimitedLighting'],
        false: []
    },
    highRisk: {
        D: ['OGEwithin5', 'IGEwithin5', 'CALFEX', 'vagueLt2'],
        UN: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin5', 'IGEwithin5', 'vagueLt2'],
        NG: ['waterBucket', 'OGEwithin5', 'IGEwithin5', 'CALFEX', 'vagueLt2'],
        true: [],
        false: []
    },
    highNonmitigableRisk: {
        D: ['lt500', 'lt1'],
        UN: ['lt700', 'gt1'],
        NG: ['lt700', 'gt1'],
        true: [],
        false: []
    },
    extremelyHighRisk: {
        D: [],
        UN: ['lt500'],
        NG: ['lt500'],
        true: [],
        false: []
    },
    extremelyHighNonmitigableRisk: {
        D: [],
        UN: ['lt1'],
        NG: ['lt1'],
        true: [],
        false: []
    },
}

export default risks