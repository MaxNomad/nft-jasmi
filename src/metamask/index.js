import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { ethers } from "ethers";
import { useCookies } from 'react-cookie'


const Metamask = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['selectedAddress', 'chain_id'])

  const connectToMetamask = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    console.log(provider.network)
    setCookie('selectedAddress', accounts[0], { path: '/' })

  }
  const renderMetamask = () => {
    if (typeof window.ethereum == 'undefined') {
      return(<button className="btn btn-box" onClick={()=> window.open("https://metamask.io/", "_blank")}>Install wallet</button>)
    }else{
      if (!cookies.selectedAddress) {
        return (
          <button className="btn btn-box" onClick={() => connectToMetamask()}>Connect wallet</button>
        )
      } else {
        return (<div>
              <button className="btn btn-box" onClick={() => removeCookie('selectedAddress')}>...{cookies.selectedAddress.slice(-6)}</button>
        </div>
  
        );
      }
    }
   
  }

  return (
    <div>
      {renderMetamask()}
    </div>
  )
}


export default Metamask;