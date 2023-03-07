import React, { useState } from 'react';
import { ethers } from "ethers";
import MetaMaskOnboarding from "@metamask/onboarding";
import { useCookies } from 'react-cookie'
import Modal from 'react-bootstrap/Modal';

const Metamask = () => {

  const [logged, setLogged] = useState(false);
  const [account, setAccount] = useState(null);
  const forwarderOrigin = "http://localhost:3000";
  const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
  const { utils } = require("ethers");
  const [provider, setProvider] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['selectedAddress', 'chain_id'])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setLogged(true);
          setAccount(utils.getAddress(result[0]));
          setCookie('selectedAddress', result[0], { path: '/' })
          setProvider(new ethers.providers.Web3Provider(window.ethereum));
          setShow(false);
        })
        .catch((error) => {
          console.log(`Could not detect Account: ${error}`);
        });
    } else {
      onboarding.startOnboarding();
    }
    
  };
  const handleLogOut = () => {
    removeCookie('selectedAddress');
    setLogged(false);
    setShow(false);
    setAccount(null);
    setProvider(null);
  }
  const renderMetamask = () => {
    if (typeof window.ethereum == 'undefined') {
      return (<button className="btn btn-box" onClick={() => window.open("https://metamask.io/", "_blank")}>Install wallet</button>)
    } else {
      if (!cookies.selectedAddress && !logged && !provider && !account) {
        return (
          <button className="btn btn-box" onClick={() => handleLogin()}>Connect wallet</button>
        )
      } else {
        return (<div>
          <button className="btn btn-box" onClick={() => handleShow() }>LogOut</button>
          <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">Are you sure you want to log-off?</Modal.Body>
        <Modal.Footer className="justify-content-center">
        <button className="btn btn-box" onClick={handleClose}>
        Cancel
          </button>
          <button className="btn btn-box" onClick={handleLogOut}>
            LogOut
          </button>
        </Modal.Footer>
      </Modal>
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