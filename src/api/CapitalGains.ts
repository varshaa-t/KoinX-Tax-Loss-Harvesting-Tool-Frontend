export type CapitalGainsData = {
    "capitalGains": {
        "stcg": {
            "profits": number,
            "losses": number
        },
        "ltcg": {
            "profits": number,
            "losses": number
        },
    }
}

const capitalGainsData: CapitalGainsData = {
    "capitalGains": {
        "stcg": {
            "profits": 70200.88,
            "losses": 1548.53
        },
        "ltcg": {
            "profits": 5020,
            "losses": 3050
        },
    }
}

export const fetchCapitalGains = (): Promise<CapitalGainsData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(capitalGainsData);
        }, 500);
    });
}