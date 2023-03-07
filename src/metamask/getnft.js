import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie'


const MetamaskBuy = () => {
  const [cookies] = useCookies()
  const ethers = require("ethers");
  const [data, setData] = useState([]);
  const [isLoaded, setLoad] = useState(false);

  const fetchCollection = () => {

    const provider = new ethers.providers.JsonRpcProvider("https://nameless-bitter-emerald.discover.quiknode.pro/3cbfd1794564a54c494f01f9c3d2008ed88860c5/");
    const collection = provider.send("qn_verifyNFTsOwner", [
      cookies.selectedAddress,
      [
        "0x495f947276749ce646f68ac8c248420045cb7b5e:36986146263609158180263344970690400670243693463513697420360993451393377370113"
      ],]

    )
    return collection
  }

  useEffect(() => {
    if (cookies.selectedAddress !== undefined) {
      fetchCollection()
        .then(data => {
          setLoad(true)
          setData(data?.assets)
        })
        .catch(err => setData([]))
    } else {
      setData([])
    }
  }, [cookies.selectedAddress]);
  console.log(data, 34)
  console.log(cookies.selectedAddress, 35)
  return (
    <>
      {!cookies.selectedAddress ? <p>Wallet is not connected.</p> : <p>Wallet connected.<br />Using : {cookies.selectedAddress}</p>}
      {data.length > 0 ? <p><button className="btn btn-box">CheckOut</button>{cookies.selectedAddress ? <button className="btn btn-box check-again">Check again</button> : ""}</p> : <p><a href='#' target="_blank"><button className="btn btn-box">Buy NFT`s</button></a>{cookies.selectedAddress ? <button className="btn btn-box check-again">Check again</button> : ""}</p>}
      
    </>
  )
}


export default MetamaskBuy;