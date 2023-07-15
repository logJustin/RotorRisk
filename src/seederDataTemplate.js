const flights = [
    {
        flightInfo5484: {
            mission: 'ATM Cont',
            missionStatement: 'NG Reset in local area',
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
                piHoursTotal: 463.9,
                piHoursNG: 105.2,
                pi25HoursInAO: true,
                nrcm1HoursTotal: 463.9,
                nrcm1HoursNG: 105.2,
                nrcm125HoursInAO: true,
                nrcm2HoursTotal: 463.9,
                nrcm2HoursNG: 105.2,
                nrcm225HoursInAO: true,
                nrcm3HoursTotal: 463.9,
                nrcm3HoursNG: 105.2,
                nrcm325HoursInAO: true,
            },
            risk: {
                initialRisk: 'M',
                risMitigation: 'Experienced crew will conduct cross checks to combat complacency.',
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
                AH64Attack: null,
                multiship: 'NG',
            },
            terrainConsiderations: {
                terrainFlight: 'D NG',
                mountainOperations: null,
                confinedAreaOperations: 'NG',
            },
            powerConsiderations: {
                OGEwithin10PercentofMaxTorque: false,
                OGEwithin5PercentofMaxTorque: false,
            },
            trainingConsiderations: {
                epEvalPfeRlprog: false,
                IfrSimIfr: false,
                hoistNonLive: true,
                hoistLive: true,
            },
            recencyOfMission: {
                pcGt90: false,
                piGt90: false,
                nrcm1Gt90: false,
                nrcm2Gt90: false,
                nrcm3Gt90: false,
            },
            risk: {
                initialRisk: 'M*',
                risMitigation: 'Crew will use exterior lighting as required.',
                mitigatedRisk: 'M*'
            }
        },
        weather: {
            lunar: {
                gt25IllumAndgt30degrees: false,
                lt25IllumAndlt30degrees: false,
                gt25IllumAndgt30degreesLimitedLighting: false,
            },
            weatherHazards: {
                windGt30: false,
                gustSpreadGt20: false,
                forecastThunderstorms: false,
                modTurbulenceIcing: false
            },
            IFR: {
                altRequired: false
            },
            visibilityCeilings: {
                gt1000: true,
                lt1000: false,
                lt700: false,
                gt3: true,
                gt2: false,
                gt1: false,
                lt1: false
            },
            risk: {
                initialRisk: 'M',
                risMitigation: 'Crew will use exterior lighting as required.',
                mitigatedRisk: 'H'
            }
        },
        overallRisk: {
            yourself: 'L',
            missionEnvironment: 'M',
            weather: 'L',
            residual: 'L',
            greatestRisk: 'Combat maneuvering flight in NG conditions.',
            riskMitigation: ' Detailed table talk and brief will be conducted by crew prior to flight.'
        },
        approval: {
            briefer: 'CW2 Trinity',
            brieferComment: 'Looks good to me.',
            brieferCommentDate: '15JUL23 10:10',
            approver: 'CPT Neo',
            approverComment: 'Fly safe!',
            approverCommentDate: '17JUL23 13:10',
        }
    },
    {
        flightInfo5484: {
            mission: 'ATM Cont',
            missionStatement: 'NG Reset in local area',
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
                piHoursTotal: 463.9,
                piHoursNG: 105.2,
                pi25HoursInAO: true,
                nrcm1HoursTotal: 463.9,
                nrcm1HoursNG: 105.2,
                nrcm125HoursInAO: true,
                nrcm2HoursTotal: 463.9,
                nrcm2HoursNG: 105.2,
                nrcm225HoursInAO: true,
                nrcm3HoursTotal: 463.9,
                nrcm3HoursNG: 105.2,
                nrcm325HoursInAO: true,
            },
            risk: {
                initialRisk: 'M',
                risMitigation: 'Experienced crew will conduct cross checks to combat complacency.',
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
                AH64Attack: null,
                multiship: 'NG',
            },
            terrainConsiderations: {
                terrainFlight: 'D NG',
                mountainOperations: null,
                confinedAreaOperations: 'NG',
            },
            powerConsiderations: {
                OGEwithin10PercentofMaxTorque: false,
                OGEwithin5PercentofMaxTorque: false,
            },
            trainingConsiderations: {
                epEvalPfeRlprog: false,
                IfrSimIfr: false,
                hoistNonLive: true,
                hoistLive: true,
            },
            recencyOfMission: {
                pcGt90: false,
                piGt90: false,
                nrcm1Gt90: false,
                nrcm2Gt90: false,
                nrcm3Gt90: false,
            },
            risk: {
                initialRisk: 'M',
                risMitigation: 'Crew will use exterior lighting as required.',
                mitigatedRisk: 'L'
            }
        },
        weather: {
            lunar: {
                gt25IllumAndgt30degrees: false,
                lt25IllumAndlt30degrees: false,
                gt25IllumAndgt30degreesLimitedLighting: false,
            },
            weatherHazards: {
                windGt30: false,
                gustSpreadGt20: false,
                forecastThunderstorms: false,
                modTurbulenceIcing: false
            },
            IFR: {
                altRequired: false
            },
            visibilityCeilings: {
                gt1000: true,
                lt1000: false,
                lt700: false,
                gt3: true,
                gt2: false,
                gt1: false,
                lt1: false
            },
            risk: {
                initialRisk: 'M',
                risMitigation: 'Crew will use exterior lighting as required.',
                mitigatedRisk: 'L'
            }
        },
        overallRisk: {
            yourself: 'L',
            missionEnvironment: 'M',
            weather: 'L',
            residual: 'L',
            greatestRisk: 'Combat maneuvering flight in NG conditions.',
            riskMitigation: ' Detailed table talk and brief will be conducted by crew prior to flight.'
        },
        approval: {
            briefer: 'CW2 Trinity',
            brieferComment: 'Looks good to me.',
            brieferCommentDate: '15JUL23 10:10',
            approver: 'CPT Neo',
            approverComment: 'Fly safe!',
            approverCommentDate: '17JUL23 13:10',
        }
    },

]
export default flights