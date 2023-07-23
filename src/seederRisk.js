const risks = {
    lowRisk: {
        D: ['multiship', 'terrainFlight'],
        UN: [],
        NG: ['multiship']
    },
    moderateRisk: {
        D: ['hoistLive', 'confinedAreaOperations'],
        UN: ['hoistLive', 'multiship'],
        NG: ['hoistLive', 'terrainFlight', 'confinedAreaOperations']
    },
    highRisk: {
        D: [],
        UN: ['terrainFlight', 'confinedAreaOperations'],
        NG: []
    }
}

export default risks