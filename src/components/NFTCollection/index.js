import React from 'react';
import { Link } from 'react-router-dom';

const NFTCardCollection = ({ nft }) => {

  return (<>
    <div className="col-sm-6 col-lg-4">
      <div className="single-live-auction home-2">
        <Link to={"collection?name=" + nft.collectionAddress}>
          <div className="auction-thumb home-2">
            <img src={nft.imageUrl} alt={nft.name} />
          </div>
        </Link>
        <div className="collection-text home-2 text-center">
          <a>{nft.name}</a>
          <li>{nft.currentOwner ? "Owner: " + nft.currentOwner : <a href={"https://opensea.io/assets/ethereum/" + nft.collectionAddress + "/" + nft.collectionTokenId} target="_black">Buy on market</a>}</li>
        </div>
      </div>
    </div>
  </>)
}

export default NFTCardCollection;