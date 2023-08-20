const risks = {
    lowRisk: {
        D: ['multiship', 'mixedMultiShip', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'terrainFlight', 'mountainOperations', 'urbanOperations', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'CBRNE', 'nonLiveHoist', 'MTFGeneralTraining', 'pcGt60', 'pcGt30', 'piGt60', 'piGt30', 'gt1000', 'lt1000', 'gt3', 'gt2', 'windGt30Hoist', 'windGt30', 'modTurbulenceIcing', 'oatNegative10Positive30'],
        UN: ['airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'pcGt30', 'gt1000', 'gt3'],
        NG: ['multiship', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'nonLiveHoist', 'pcGt30', 'gt1000', 'gt3', 'windGt30', 'modTurbulenceIcing'],
        true: ['gt25IllumAndgt30degrees', 'nrcm1Gt60', 'nrcm2Gt60', 'nrcm3Gt60', 'nrcm1Gt30', 'nrcm2Gt30', 'nrcm3Gt30', 'hoistGt30', 'specificGt12', 'specific2to12', 'vagueGt12'],
        false: ['altRequired']
    },
    moderateRisk: {
        D: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'waterBucket', 'paradrops', 'fatCow', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin10', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS', 'pcGt90', 'piGt90', 'gustSpreadGt20',],
        UN: ['multiship', 'mixedMultiShip', 'externalLoads', 'fatCow', 'mountainOperations', 'CBRNE', 'gunneryLiveFire', 'pcGt90', 'pcGt60', 'piGt90', 'piGt60', 'piGt30', 'windGt30Hoist', 'windGt30', 'gustSpreadGt20', 'modTurbulenceIcing', 'oatNegative10Positive30'],
        NG: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'mixedMultiShip', 'paradrops', 'fatCow', 'terrainFlight', 'mountainOperations', 'pinnacleOperations', 'dveConditions', 'urbanOperations', 'confinedOperations', 'OGEwithin10', 'CBRNE', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS', 'pcGt90', 'pcGt60', 'piGt90', 'piGt60', 'piGt30', 'windGt30Hoist', 'gustSpreadGt20', 'oatNegative10Positive30'],
        true: ['altRequired', 'lt25IllumAndlt30degrees', 'nrcm1Gt90', 'nrcm2Gt90', 'nrcm3Gt90', 'hoistGt60', 'specificLt2', 'vague2to12'],
        false: []
    },
    moderateNonmitigableRisk: {
        D: ['forecastThunderstorms', 'lt700', 'gt1', 'dartOneTimeFlight', 'rappelSpiesFries', 'overwaterOperations', 'IGEwithin10', 'liveHoist'],
        UN: ['forecastThunderstorms', 'lt1000', 'gt2', 'MTFGeneralTraining', 'dartOneTimeFlight', 'waterBucket', 'paradrops', 'rappelSpiesFries', 'urbanOperations', 'OGEwithin10', 'IGEwithin10', 'nonLiveHoist', 'liveHoist'],
        NG: ['forecastThunderstorms', 'lt1000', 'gt2', 'MTFGeneralTraining', 'dartOneTimeFlight', 'blackout', 'rappelSpiesFries', 'overwaterOperations', 'IGEwithin10', 'liveHoist'],
        true: ['gt25IllumAndgt30degreesLimitedLighting', 'hoistGt90'],
        false: []
    },
    highRisk: {
        D: ['OGEwithin5', 'CALFEX'],
        UN: ['airAssault', 'AH64AttackReconSecurity', 'medevacCasevac', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin5'],
        NG: ['waterBucket', 'OGEwithin5', 'CALFEX'],
        true: ['vagueLt2'],
        false: []
    },
    highNonmitigableRisk: {
        D: ['lt500', 'lt1', 'IGEwithin5'],
        UN: ['lt700', 'gt1', 'IGEwithin5'],
        NG: ['lt700', 'gt1', 'IGEwithin5'],
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