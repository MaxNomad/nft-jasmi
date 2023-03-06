
import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import NFTCard from './NFTCard';
import "./nav.scss";

const NFTItem = (data) => {
    const urlParams = new URLSearchParams(window.location.search);
    //function to fetch nfts by collection



    //jsx containing our conditional rendering
    return (
        <div className="live-auctions-area section-padding-100-50 bg-overlay-2 bg-img">
            <div className="container">
                <div className="row">

                </div>

                <div className="row justify-content-center">

                </div>
                <div className="col-12">
                    <div className="btn-area mb-50 text-center">
                        <a className="btn btn-box" href="#">View on OpenSea</a>
                    </div>
                </div>
            </div>
        </div>

    );
}



export default NFTItem;