import React, {useEffect, useState} from "react";

const Players = ({state, address}) => {
    const [account,setAccount] = useState("No account connected");
    const [regesteredPlayers, setRegesteredPlayers] = useState([]);

    useEffect(()=> {
        const getAccounts = async () => {
            const {web3} = state;
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        }
        state.web3 && getAccounts(); 
    },[state,state.web3]);

    useEffect(()=>
    {
        const getPlayers = async () => {

            try{
                const {contract} = state;
                console.log(contract);
                const players = await contract.methods.allParticipants().call();
                console.log(players);
                const regesteredPlayers = await Promise.all(
                    players.map((player)=>
                    {
                        return player;
                    })
                )
                    console.log(regesteredPlayers);
                    setRegesteredPlayers(regesteredPlayers);
    
            }
            catch(e)
            {
                console.log("error")
            }
      

        }

        state.contract && getPlayers() ;
    },[state, state.contract]);

    return <>
    Connected account: {account}
    <br></br>
    Players pay 1 ether on this contract address: {address}
    <br></br>
    {regesteredPlayers.length!==0 && regesteredPlayers.map((name)=><p key = {name}>
     {name}</p>)}
    </>
}
export default Players;

