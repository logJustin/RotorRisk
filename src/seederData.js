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
                AH64Attack: null,
                multiship: 'D NG',
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
                hoistLive: 'D NG',
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
                riskMitigation: 'Crew will use exterior lighting as required.',
                mitigatedRisk: 'M*'
            }
        },
        weather: {
            lunar: {
                gt25IllumAndgt30degrees: false,
                lt25IllumAndlt30degrees: false,
                gt25IllumAndgt30degreesLimitedLighting: true,
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
    // {
    //     flightInfo5484: {
    //         mission: 'ATM Cont',
    //         missionStatement: 'NG Reset in local area. Going to fly low and fast, definitely not going to flip the aircraft on its side over the trees.',
    //         date: '1AUG23',
    //         route: 'ETIC-ETIC',
    //         aircraftType: 'HH60M',
    //         aircraftTail: '20130',
    //         pc: 'CPT Reynolds',
    //         pcSeat: 'L',
    //         pi: 'CW3 Vegas',
    //         piSeat: 'R',
    //         nrcm1: 'SGT Jules',
    //         nrcm2: 'SPC Wallace',
    //         nrcm3: null,
    //         flightConditions: '1, 3, 6',
    //         etd: '2030',
    //         ete: '0100',
    //     },
    //     crewData: {
    //         experience: {
    //             pcHoursTotal: 463.9,
    //             pcHoursNG: 105.2,
    //             pc25HoursInAO: true,
    //             piHoursTotal: 2351.0,
    //             piHoursNG: 384.2,
    //             pi25HoursInAO: true,
    //             nrcm1HoursTotal: 399.9,
    //             nrcm1HoursNG: 152.7,
    //             nrcm125HoursInAO: true,
    //             nrcm2HoursTotal: 150.1,
    //             nrcm2HoursNG: 200.2,
    //             nrcm225HoursInAO: true,
    //             nrcm3HoursTotal: 611.8,
    //             nrcm3HoursNG: 205.4,
    //             nrcm325HoursInAO: true,
    //         },
    //         risk: {
    //             initialRisk: 'M',
    //             riskMitigation: 'PC with >180 hours in AO paired with PC/MTP. Low risk NRCMs paired with Moderate risk PC. CE/MO have >50 hours in AO & are familiar with route to be flown.',
    //             mitigatedRisk: 'L'
    //         },
    //         fighterManagement: {
    //             hundredHoursinLast30Days: false,
    //             hundredtenHoursinLast30Days: false,
    //             lessthan10HoursRest: false,
    //             lessthan8HoursRest: false,
    //             extensionInLast24Hours: false,
    //             twoExtensionsInLast48Hours: false,
    //             missionCompleteInLastThird: false
    //         }
    //     },
    //     missionComplexity: {
    //         missionConsiderations: {
    //             airAssault: null,
    //             AH64Attack: null,
    //             multiship: 'D NG',
    //         },
    //         terrainConsiderations: {
    //             terrainFlight: 'NG',
    //             mountainOperations: null,
    //             confinedAreaOperations: 'NG',
    //         },
    //         powerConsiderations: {
    //             OGEwithin10PercentofMaxTorque: false,
    //             OGEwithin5PercentofMaxTorque: false,
    //         },
    //         trainingConsiderations: {
    //             epEvalPfeRlprog: false,
    //             IfrSimIfr: false,
    //             hoistNonLive: true,
    //             hoistLive: 'D NG',
    //         },
    //         recencyOfMission: {
    //             pcGt90: false,
    //             piGt90: false,
    //             nrcm1Gt90: false,
    //             nrcm2Gt90: false,
    //             nrcm3Gt90: false,
    //         },
    //         risk: {
    //             initialRisk: 'M*',
    //             riskMitigation: 'Crew will use exterior lighting as required.',
    //             mitigatedRisk: 'M*'
    //         }
    //     },
    //     weather: {
    //         lunar: {
    //             gt25IllumAndgt30degrees: false,
    //             lt25IllumAndlt30degrees: false,
    //             gt25IllumAndgt30degreesLimitedLighting: true,
    //         },
    //         weatherHazards: {
    //             windGt30: false,
    //             gustSpreadGt20: false,
    //             forecastThunderstorms: false,
    //             modTurbulenceIcing: false
    //         },
    //         IFR: {
    //             altRequired: false
    //         },
    //         visibilityCeilings: {
    //             gt1000: true,
    //             lt1000: false,
    //             lt700: false,
    //             gt3: true,
    //             gt2: false,
    //             gt1: false,
    //             lt1: false
    //         },
    //         risk: {
    //             initialRisk: 'H',
    //             riskMitigation: 'Crew will use exterior lighting as required.',
    //             mitigatedRisk: 'M'
    //         }
    //     },
    //     overallRisk: {
    //         initialRisk: 'M*',
    //         residualRisk: 'M*',
    //         greatestRisk: 'Combat maneuvering flight in NG conditions.',
    //         riskMitigation: 'Detailed table talk and brief will be conducted by crew prior to flight.'
    //     },
    //     approval: {
    //         briefer: 'CW2 Trinity',
    //         brieferComment: 'Update NOTAMS for the restricted area. Call base ops to deconflict for landing at the hospital pad. Brief go-arounds and escape routes prior to approaches.',
    //         brieferCommentDate: '15JUL23 10:10',
    //         approver: 'CPT Neo',
    //         approverComment: 'Fly safe!',
    //         approverCommentDate: '17JUL23 13:10',
    //     }
    // },


]
export default flights