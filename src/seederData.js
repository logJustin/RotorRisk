const flights = [
    {
        date: '13JUL23',
        pilot: 'Neo',
        risk: 'L',
        briefed: 'CW3 Trinity',
        approved: 'CPT Vega',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Parzival',
        risk: 'M',
        briefed: 'CW4 Art3mis',
        approved: 'LTC Winnfield',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Luke Skywalker',
        risk: 'H',
        briefed: 'CW5 Organa',
        approved: 'COL Solo',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Harry Potter',
        risk: 'M',
        briefed: 'CW4 Granger',
        approved: 'LTC Dumbledore',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Indiana Jones',
        risk: 'H',
        briefed: 'CW5 Ravenwood',
        approved: 'COL Brody',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'James Bond',
        risk: 'M',
        briefed: 'CW4 Moneypenny',
        approved: 'LTC Trevelyan',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Iron Man',
        risk: 'H',
        briefed: 'CW5 Potts',
        approved: 'COL Rhodes',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Ellen Ripley',
        risk: 'M',
        briefed: 'CW4 Hicks',
        approved: 'LTC Bishop',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Frodo Baggins',
        risk: 'L',
        briefed: 'CW3 Gamgee',
        approved: 'CPT Aragorn',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'John Wick',
        risk: 'M',
        briefed: 'CW4 Winston',
        approved: 'LTC Charon',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Wonder Woman',
        risk: 'H',
        briefed: 'CW5 Trevor',
        approved: 'COL Hippolyta',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Captain Jack Sparrow',
        risk: 'M',
        briefed: 'CW4 Swann',
        approved: 'LTC Barbossa',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Ethan Hunt',
        risk: 'H',
        briefed: 'CW5 Dunn',
        approved: 'COL Stickell',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Thor',
        risk: 'M',
        briefed: 'CW4 Loki',
        approved: 'LTC Odin',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Marty McFly',
        risk: 'L',
        briefed: 'CW3 Brown',
        approved: 'CPT Tannen',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Katniss Everdeen',
        risk: 'M',
        briefed: 'CW4 Mellark',
        approved: 'LTC Abernathy',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Sherlock Holmes',
        risk: 'H',
        briefed: 'CW5 Watson',
        approved: 'COL Holmes',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Wolverine',
        risk: 'M',
        briefed: 'CW4 Grey',
        approved: 'LTC Xavier',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Dominic Toretto',
        risk: 'H',
        briefed: 'CW5 Ortiz',
        approved: 'COL Hobbs',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Katara',
        risk: 'M',
        briefed: 'CW4 Aang',
        approved: 'LTC Zuko',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    }
]

// change file structure to an object of objects
// sub objects:
//     Summary (5484)
//     Experience Day & NG, Initial Risk, residual Risk, Mitigation
//     Mission Complexity: Mission, Terrain, Power, Training, Recency
//     Weather Data
//     Overal Risk, Mitigations


const flightsFixed = [
    {
        date: '13JUL23',
        pilot: 'Neo',
        risk: 'L',
        briefed: 'CW3 Trinity',
        approved: 'CPT Vega',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Parzival',
        risk: 'M',
        briefed: 'CW4 Art3mis',
        approved: 'LTC Winnfield',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Luke Skywalker',
        risk: 'H',
        briefed: 'CW5 Organa',
        approved: 'COL Solo',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Harry Potter',
        risk: 'M',
        briefed: 'CW4 Granger',
        approved: 'LTC Dumbledore',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Indiana Jones',
        risk: 'H',
        briefed: 'CW5 Ravenwood',
        approved: 'COL Brody',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'James Bond',
        risk: 'M',
        briefed: 'CW4 Moneypenny',
        approved: 'LTC Trevelyan',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Iron Man',
        risk: 'H',
        briefed: 'CW5 Potts',
        approved: 'COL Rhodes',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Ellen Ripley',
        risk: 'M',
        briefed: 'CW4 Hicks',
        approved: 'LTC Bishop',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Frodo Baggins',
        risk: 'L',
        briefed: 'CW3 Gamgee',
        approved: 'CPT Aragorn',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'John Wick',
        risk: 'M',
        briefed: 'CW4 Winston',
        approved: 'LTC Charon',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Wonder Woman',
        risk: 'H',
        briefed: 'CW5 Trevor',
        approved: 'COL Hippolyta',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Captain Jack Sparrow',
        risk: 'M',
        briefed: 'CW4 Swann',
        approved: 'LTC Barbossa',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Ethan Hunt',
        risk: 'H',
        briefed: 'CW5 Dunn',
        approved: 'COL Stickell',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Thor',
        risk: 'M',
        briefed: 'CW4 Loki',
        approved: 'LTC Odin',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Marty McFly',
        risk: 'L',
        briefed: 'CW3 Brown',
        approved: 'CPT Tannen',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Katniss Everdeen',
        risk: 'M',
        briefed: 'CW4 Mellark',
        approved: 'LTC Abernathy',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Sherlock Holmes',
        risk: 'H',
        briefed: 'CW5 Watson',
        approved: 'COL Holmes',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Wolverine',
        risk: 'M',
        briefed: 'CW4 Grey',
        approved: 'LTC Xavier',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Dominic Toretto',
        risk: 'H',
        briefed: 'CW5 Ortiz',
        approved: 'COL Hobbs',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    },
    {
        date: '13JUL23',
        pilot: 'Katara',
        risk: 'M',
        briefed: 'CW4 Aang',
        approved: 'LTC Zuko',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    }
]
export default flights