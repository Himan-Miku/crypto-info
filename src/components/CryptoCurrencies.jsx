import Axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import millify from 'millify'
import { Link } from 'react-router-dom'
const config = {
  headers: {
    "X-RapidAPI-Key": "769cdbfcb9mshde8cd22a383274fp140503jsn6cc79d0c29a0",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
}

const CryptoCurrencies = () => {

  const fetchAllCoins = async () => {
    const response = await Axios.get("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
    config)
    return response.data
  }

  const { data, isError, error, isLoading } = useQuery(["allCoins"], fetchAllCoins)

  console.log(data)

  if(isLoading) {
    return <h1>Loading ...</h1>
  }

  if(isError) {
    return <h1> {error.message} </h1>
  }

  return (
    <div className="w-[79vw] bg-gray-500 overflow-y-scroll h-screen scrollbar-hide pb-8">
      <div className="flex flex-col gap-6 mt-8">
        <h2 className="text-center text-white text-2xl font-medium bg-gray-800 w-[50%] mx-auto p-[0.88rem] rounded-xl">
          Crypto Coins : 
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {data?.data.coins.map((coin) => {
            return (
              <Link key={coin.uuid} to={`/${coin.uuid}`}>
              <div className="bg-gray-700 text-white w-[240px] h-[250px] rounded-lg flex flex-col justify-evenly shadow-lg hover:shadow-2xl transform transition-all hover:-translate-y-1 duration-300">
                <div className="flex flex-row justify-between items-center px-8">
                  <p className="font-semibold text-lg tracking-wider"> {coin?.rank}. {coin?.name} </p>
                  <img className="w-10 rounded-full" src={coin?.iconUrl} />
                </div>
                <div className="flex flex-col gap-3 pl-8">
                  <p className="text-sm font-semibold"> Price : {millify(coin?.price)} $ </p>
                  <p className="text-sm font-semibold"> Market Cap : {millify(coin?.marketCap)} $ </p>
                  <p className="text-sm font-semibold"> Daily Change : {coin?.change} % </p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default CryptoCurrencies