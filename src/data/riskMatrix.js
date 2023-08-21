const risks = {
    lowRisk: {
        D: ['multiship', 'MEDEVAC', 'mixedMultiShip', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'terrainFlight', 'mountainOperations', 'urbanOperations', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'CBRNE', 'nonLiveHoist', 'MTFGeneralTraining', 'pcGt60', 'pcGt30', 'piGt60', 'piGt30', 'gt1000', 'lt1000', 'gt3', 'gt2', 'windGt30Hoist', 'windGt30', 'modTurbulenceIcing', 'oatNegative10Positive30', 'AH64AttackReconSecurity', 'FARP', 'crossCountryBorder', 'blackoutCurtain', 'UH60DoorsOff'],
        UN: ['airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'pcGt30', 'gt1000', 'gt3', 'FARP', 'crossCountryBorder', 'UH60DoorsOff'],
        NG: ['multiship', 'MEDEVAC', 'externalLoads', 'airmovementVIP', 'continuation', 'CEFS', 'progessionEvaluationEPs', 'IFRSimulatedIMC', 'nonLiveHoist', 'pcGt30', 'gt1000', 'gt3', 'windGt30', 'modTurbulenceIcing', 'AH64AttackReconSecurity', 'piGt30', 'FARP', 'crossCountryBorder', 'UH60DoorsOff'],
        true: ['gt25IllumAndgt30degrees', 'nrcm1Gt60', 'nrcm2Gt60', 'nrcm3Gt60', 'nrcm1Gt30', 'nrcm2Gt30', 'nrcm3Gt30', 'hoistGt30', 'specificGt12', 'specific2to12', 'vagueGt12'],
        false: ['altRequired']
    },
    moderateRisk: {
        D: ['airAssault', 'CASEVAC', 'waterBucket', 'paradrops', 'fatCow', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin10', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS', 'pcGt90', 'piGt90', 'gustSpreadGt20', 'Cruisewithin10'],
        UN: ['multiship', 'MEDEVAC', 'mixedMultiShip', 'externalLoads', 'fatCow', 'mountainOperations', 'CBRNE', 'gunneryLiveFire', 'pcGt90', 'pcGt60', 'piGt90', 'piGt60', 'piGt30', 'windGt30Hoist', 'windGt30', 'gustSpreadGt20', 'modTurbulenceIcing', 'oatNegative10Positive30', 'Cruisewithin10'],
        NG: ['airAssault', 'CASEVAC', 'mixedMultiShip', 'paradrops', 'fatCow', 'terrainFlight', 'mountainOperations', 'pinnacleOperations', 'dveConditions', 'urbanOperations', 'confinedOperations', 'OGEwithin10', 'CBRNE', 'combatManueveringFlight', 'gunneryLiveFire', 'AMS', 'pcGt90', 'pcGt60', 'piGt90', 'piGt60', 'windGt30Hoist', 'gustSpreadGt20', 'oatNegative10Positive30', 'Cruisewithin10'],
        true: ['altRequired', 'lt25IllumAndlt30degrees', 'nrcm1Gt90', 'nrcm2Gt90', 'nrcm3Gt90', 'hoistGt60', 'specificLt2', 'vague2to12'],
        false: []
    },
    moderateNonmitigableRisk: {
        D: ['forecastThunderstorms', 'lt700', 'gt1', 'dartOneTimeFlight', 'rappelSpiesFries', 'overwaterOperations', 'IGEwithin10', 'liveHoist', 'famFlight', 'hoverWXRlt500', 'OWSea4to5'],
        UN: ['forecastThunderstorms', 'lt1000', 'gt2', 'MTFGeneralTraining', 'dartOneTimeFlight', 'waterBucket', 'paradrops', 'rappelSpiesFries', 'urbanOperations', 'OGEwithin10', 'IGEwithin10', 'nonLiveHoist', 'liveHoist', 'famFlight', 'hoverWXRlt500', 'OWSea4to5'],
        NG: ['forecastThunderstorms', 'lt1000', 'gt2', 'MTFGeneralTraining', 'dartOneTimeFlight', 'blackout', 'rappelSpiesFries', 'overwaterOperations', 'IGEwithin10', 'liveHoist', 'famFlight', 'hoverWXRlt500', 'OWSea4to5'],
        true: ['gt25IllumAndgt30degreesLimitedLighting', 'hoistGt90'],
        false: []
    },
    highRisk: {
        D: ['OGEwithin5', 'CALFEX'],
        UN: ['airAssault', 'CASEVAC', 'AH64AttackReconSecurity', 'overwaterOperations', 'pinnacleOperations', 'dveConditions', 'confinedOperations', 'OGEwithin5'],
        NG: ['waterBucket', 'OGEwithin5', 'CALFEX'],
        true: ['vagueLt2'],
        false: []
    },
    highNonmitigableRisk: {
        D: ['lt500', 'lt1', 'IGEwithin5', 'OWUntrained', 'OWSeaGt6'],
        UN: ['lt700', 'gt1', 'IGEwithin5', 'OWUntrained', 'OWSeaGt6'],
        NG: ['lt700', 'gt1', 'IGEwithin5', 'OWUntrained', 'OWSeaGt6'],
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