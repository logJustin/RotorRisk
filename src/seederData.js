const flights = [
    {
        flightInfo5484: {
            mission: 'ATM Cont',
            missionStatement: 'NG Reset in local area. Going to fly low and fast, definitely not going to flip the aircraft on its side over the trees.',
            date: '1AUG23',
            route: 'ETIC-ETIC',
            aircraftType: 'HH60M',
            aircraftTail: '20130',
            pc: 'CPT Reynolds',
            pcSeat: 'L',
            pi: 'CW3 Vegas',
            piSeat: 'R',
            nrcm1: 'SGT Jules',
            nrcm2: 'SPC Wallace',
            nrcm3: null,
            flightConditions: '1, 3, 6',
            etd: '2030',
            ete: '0100',
        },
        crewData: {
            experience: {
                pcHoursTotal: 463.9,
                pcHoursNG: 105.2,
                pc25HoursInAO: true,
                piHoursTotal: 2351.0,
                piHoursNG: 384.2,
                pi25HoursInAO: true,
                nrcm1HoursTotal: 399.9,
                nrcm1HoursNG: 152.7,
                nrcm125HoursInAO: true,
                nrcm2HoursTotal: 150.1,
                nrcm2HoursNG: 200.2,
                nrcm225HoursInAO: true,
                nrcm3HoursTotal: 611.8,
                nrcm3HoursNG: 205.4,
                nrcm325HoursInAO: true,
            },
            risk: {
                initialRisk: 'M',
                riskMitigation: 'PC with >180 hours in AO paired with PC/MTP. Low risk NRCMs paired with Moderate risk PC. CE/MO have >50 hours in AO & are familiar with route to be flown.',
                mitigatedRisk: 'L'
            },
            fighterManagement: {
                hundredHoursinLast30Days: false,
                hundredtenHoursinLast30Days: false,
                lessthan10HoursRest: false,
                lessthan8HoursRest: false,
                extensionInLast24Hours: false,
                twoExtensionsInLast48Hours: false,
                missionCompleteInLastThird: false
            }
        },
        missionComplexity: {
            missionConsiderations: {
                airAssault: null,
                AH64AttackReconSecurity: null,
                medevacCasevac: 'D NG',
                multiship: null,
                mixedMultiShip: null,
                MTFGeneralTraining: null,
                dartOneTimeFlight: null,
                blackout: null,
                waterBucket: null,
                paradrops: null,
                rappelSpiesFries: null,
                externalLoads: null,
                airmovementVIP: null,
                continuation: null,
                CEFS: 'D NG',
                fatCow: null
            },
            terrainConsiderations: {
                terrainFlight: 'D NG',
                mountainOperations: null,
                overwaterOperations: null,
                pinnacleOperations: null,
                urbanOperations: null,
                confinedOperations: 'D NG'
            },
            powerConsiderations: {
                OGEwithin10: null,
                IGEwithin10: null,
                OGEwithin5: null,
                IGEwithin5: null,
            },
            trainingConsiderations: {
                progessionEvaluationEPs: null,
                IFRSimulatedIMC: null,
                CBRNE: null,
                nonLiveHoist: 'D NG',
                liveHoist: 'D NG',
                combatManueveringFlight: null,
                gunneryLiveFire: null,
                CALFEX: null,
                AMS: null
            },
            recencyOfMission: {
                pcGt90: null,
                pcGt60: null,
                pcGt30: null,
                piGt90: null,
                piGt60: null,
                piGt30: null,
                nrcm1Gt90: null,
                nrcm1Gt60: null,
                nrcm1Gt30: null,
                nrcm2Gt90: null,
                nrcm2Gt60: null,
                nrcm2Gt30: null,
                nrcm3Gt90: null,
                nrcm3Gt60: null,
                nrcm3Gt30: null,
                hoistGt90: null,
                hoistGt60: null,
                hoistGt30: null,
            },
            missionPlanningTime: {
                specificGt12: null,
                specific2to12: null,
                specificLt2: null,
                vagueGt12: null,
                vague2to12: null,
                vagueLt2: null,
            },
            risk: {
                initialRisk: 'M*',
                riskMitigation: 'Crew will use exterior lighting as required.',
                mitigatedRisk: 'M*'
            }
        },
        weather: {
            lunar: {
                gt25IllumAndgt30degrees: true,
                lt25IllumAndlt30degrees: false,
                gt25IllumAndgt30degreesLimitedLighting: false,
            },
            weatherHazards: {
                windGt30: null,
                windGt30Hoist: null,
                gustSpreadGt20: null,
                forecastThunderstorms: null,
                modTurbulenceIcing: null,
                oatNegative10Positive30: null
            },
            IFR: {
                altRequired: false
            },
            visibilityCeilings: {
                gt1000: 'D NG',
                lt1000: null,
                lt700: null,
                lt500: null,
                gt3: null,
                gt2: null,
                gt1: null,
                lt1: null
            },
            risk: {
                initialRisk: 'H',
                riskMitigation: 'Crew will use exterior lighting as required.',
                mitigatedRisk: 'M'
            }
        },
        overallRisk: {
            initialRisk: 'M*',
            residualRisk: 'M*',
            greatestRisk: 'Combat maneuvering flight in NG conditions.',
            riskMitigation: 'Detailed table talk and brief will be conducted by crew prior to flight.'
        },
        approval: {
            briefer: 'CW2 Trinity',
            brieferComment: 'Update NOTAMS for the restricted area. Call base ops to deconflict for landing at the hospital pad. Brief go-arounds and escape routes prior to approaches.',
            brieferCommentDate: '15JUL23 10:10',
            approver: 'CPT Neo',
            approverComment: 'Fly safe!',
            approverCommentDate: '17JUL23 13:10',
        }
    },


]
export default flights