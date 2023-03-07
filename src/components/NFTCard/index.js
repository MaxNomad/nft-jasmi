import React from 'react';
import { Link } from 'react-router-dom';


const NFTCard = ({nft}) => {
    
    return (
        
        <div className="col-sm-6 col-lg-4">
           
        <div className="single-live-auction home-2">
        <Link to={"item?name=" + nft?.collectionAddress + "&id="+ nft?.collectionTokenId}>
          <div className="auction-thumb home-2">
            <img src={nft?.imageUrl} alt={nft?.name} />
          </div>
          </Link>

          <div className="collection-text home-2 text-center">
            <a>{nft?.name}</a>
            <li>{nft.currentOwner ? "Owner: " + nft.currentOwner: <a href={"https://opensea.io/assets/ethereum/" + nft?.collectionAddress + "/" + nft?.collectionTokenId} target="_black" rel="noreferrer">Buy on market</a>}</li>
          </div>
        </div>
      </div>
      
    )
}

export default NFTCard;