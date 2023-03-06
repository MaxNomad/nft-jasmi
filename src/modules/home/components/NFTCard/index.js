//src/components/NFTCard.js
import React from 'react';
import { Link } from 'react-router-dom';

//component that takes an nft object and maps it to corresponding elements
const NFTCard = ({nft}) => {
    
    return (
        
        <div className="col-sm-6 col-lg-4">
           
        <div className="single-live-auction home-2">
        <Link to={"item?name=" + nft.collectionAddress + "&id="+ nft.collectionTokenId}>
          <div className="auction-thumb home-2">
            <img src={nft.imageUrl} alt="Image" />
          </div>
          </Link>

          <div className="collection-text home-2 text-center">
            <a href="#">{nft.name}</a>
            <li>{nft.currentOwner ? "Owner: " + nft.currentOwner: <a href={"https://opensea.io/assets/ethereum/" + nft.collectionAddress + "/" + nft.collectionTokenId} target="_black">Buy on market</a>}</li>
          </div>
        </div>
      </div>
      
    )
}

export default NFTCard;