import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { CookiesProvider } from 'react-cookie';
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <MoralisProvider serverUrl="https://7xgsoqieqpnc.usemoralis.com:2053/server" appId="DP2MErbImcsn3z5mesuFMQxlLzf4EnDF5tOHcneM">
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </MoralisProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
