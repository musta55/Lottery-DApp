import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import Lottery from "./contracts/Lottery.json";  // abi of lottery smart contract
import "./App.css";
import Manager from "./components/Manager.js";

const App = () => {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();

        const deployedNetwork = Lottery.networks[networkId];
        console.log("Contract Address:", deployedNetwork.address);
        const instance = new web3.eth.Contract(
          Lottery.abi,
          deployedNetwork && deployedNetwork.address
        );
        setState({ web3, contract: instance });
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <div className="App">
     <Manager state={state}></Manager>
    </div>
  );
};
export default App;
