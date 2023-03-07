
import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import NFTCardCollection from '../NFTCollection';

const NFTCollections = () => {

    const [nfts, setNFTs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [address, setAddress] = useState('0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b')
  
    //function to fetch nfts by collection
    const fetchCollection = async () => {
      const provider = new ethers.providers.JsonRpcProvider("https://nameless-bitter-emerald.discover.quiknode.pro/3cbfd1794564a54c494f01f9c3d2008ed88860c5/");
      const collection = await provider.send("qn_fetchNFTsByCollection", {
        collection: address,
        page: 2,
        perPage: 9})
      return collection
    }
  
    //useEffect renders every time address is set
    useEffect(() => {
      window.scrollTo(0, 0);
      fetchCollection()
      .then(data => {
        setNFTs(data.tokens)
        setIsLoading(false)
        console.log(data)
      })
      .catch(err => setNFTs([]))
    }, []);
  
    
    //jsx containing our conditional rendering
    return (
        <div className="live-auctions-area section-padding-100-50 bg-overlay-2 bg-img">
        <div className="container">
          <div className="row">
  
            <div className="col-12 text-center">
              <h6 className="heading-sub">New Collection</h6>
              <h2 className="heading-title">All Collections</h2>
            </div>
          </div>
  
          <div className="row justify-content-center">
        {!isLoading && nfts.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Collection Found</h1>}

          {nfts.map(token => <NFTCardCollection key={token.name} nft={token} />)}
        </div>
      <div className="col-12">
            <div className="btn-area mb-50 text-center">
              <a className="btn btn-box w-80 explore-btn" href="https://opensea.io/collection/clonex" target="_blank" rel="noreferrer">Explore on OpenSea</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
  


export default NFTCollections;