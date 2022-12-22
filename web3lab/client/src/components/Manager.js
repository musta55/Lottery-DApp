import React, {useState,useEffect} from 'react';
import "./Manager.css";

const Manager = ({state}) => {

    const [account,setAccount]=useState("");
    const [cbalance, setCbalance ] = useState(0);
    const [lwinner,setLwinner]= useState("No winner yet");

useEffect(()=>
{
    const getAccount = async () => {
        const { web3 } = state;
        const accounts = await web3.eth.getAccounts();
        console.log("Account holo "+accounts);
        setAccount(accounts[0]);
      };
      state.web3 && getAccount();
    }, [state, state.web3]);

    const contractBalance = async() => {
        const {contract} = state;
        const balance = await contract.methods.getBalance().call({from:account});
    }
return <></>
};

export default Manager;