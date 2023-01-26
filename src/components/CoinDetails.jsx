import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import millify from "millify";
import Axios from "axios";
import { UilUsdCircle } from '@iconscout/react-unicons'
import { UilListOlAlt } from '@iconscout/react-unicons'
import { UilBoltAlt } from '@iconscout/react-unicons'
import { UilTrophy } from '@iconscout/react-unicons'
import { UilAnalytics } from '@iconscout/react-unicons'
import { UilComparison } from '@iconscout/react-unicons'
import { UilExclamationTriangle } from '@iconscout/react-unicons'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { UilTimesCircle } from '@iconscout/react-unicons'

const config = {
  headers: {
    "X-RapidAPI-Key": "769cdbfcb9mshde8cd22a383274fp140503jsn6cc79d0c29a0",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const CoinDetails = () => {
  const { coinId } = useParams();

  const { data, isError, isLoading, error } = useQuery(["coin"], async () => {
    const response = await Axios.get(
      `https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
      config
    );
    return response.data;
  });

  console.log(data?.data.coin);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1> {error.message} </h1>;
  }

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <div className="w-[79vw] bg-gray-500 overflow-y-scroll h-screen scrollbar-hide pb-8">
      <div className="mt-8">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-row items-center justify-center gap-10 shadow-lg text-center bg-gray-800 w-[45%] mx-auto p-[0.88rem] rounded-xl">
            <h1 className="text-white text-4xl font-semibold">{data?.data.coin.name}</h1>
            <img className="w-16 rounded-full" src={data?.data.coin.iconUrl} />
          </div>
          <div className="mt-8 bg-gray-700 mx-12 p-4 rounded-xl">
          <h3 className="text-lg font-normal text-white leading-7"> {removeTags(data?.data.coin.description)} </h3>
          </div>
        </div>
        <div className="mt-8 flex flex-row justify-center gap-32">
        <div className="flex flex-col gap-6 p-2">
        <div className="bg-gray-800 rounded-xl p-3 w-[470px]">
          <h3 className="text-white font-medium text-2xl"> {data?.data.coin.name} Value Statistics : </h3>
          </div>
          <div className="text-white flex flex-col gap-2 bg-gray-700 rounded-xl p-4">
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilUsdCircle /> Price to USD : $ {millify(data?.data.coin.price)} </p>
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilListOlAlt /> Rank : {data?.data.coin.rank} </p>
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilBoltAlt /> 24h Volume : $ {millify(data?.data.coin["24hVolume"])} </p>
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilUsdCircle /> Market Cap : $ {millify(data?.data.coin.marketCap)} </p>
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilTrophy /> All Time High : $ {millify(data?.data.coin.allTimeHigh.price)} </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-2">
        <div className="bg-gray-800 rounded-xl p-3 w-[470px]">
          <h3 className="text-white font-medium text-2xl"> Other Statistics : </h3>
          </div>
          <div className="text-white flex flex-col gap-2 bg-gray-700 rounded-xl p-4">
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilAnalytics /> Number of Markets : {data?.data.coin.numberOfMarkets} </p>
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilComparison /> Number of Exchanges : {data?.data.coin.numberOfExchanges} </p>
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilExclamationTriangle /> Approved Supply : {data?.data.coin.supply.confirmed} </p>
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilExclamationTriangle /> Total Supply : $ {millify(data?.data.coin.supply.total)} </p>
            <p className="flex flex-row text-base font-medium p-4 gap-6"> <UilExclamationTriangle /> Change : {millify(data?.data.coin.change)} % </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
