export const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "769cdbfcb9mshde8cd22a383274fp140503jsn6cc79d0c29a0",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
};

export const options12 = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "12",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "769cdbfcb9mshde8cd22a383274fp140503jsn6cc79d0c29a0",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
};