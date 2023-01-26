import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { SideBar, CoinDetails, Home, CryptoCurrencies } from "./components";

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <div className="flex font-poppins">
      <QueryClientProvider client={client}>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:coinId" element={ <CoinDetails /> } />
          <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
