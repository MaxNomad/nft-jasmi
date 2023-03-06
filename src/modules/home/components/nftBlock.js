
import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import NFTCard from './NFTCard';
import "./nav.scss";

const NFTBlock = () => {

    const [nfts, setNFTs] = useState([])
    const [nftsLo, setNFTsLo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const urlParams = new URLSearchParams(window.location.search);
    const [page, setPage] = useState(1)
    const collectionId = urlParams.get('name');
    //function to fetch nfts by collection
    const fetchCollection = async () => {
        const provider = new ethers.providers.JsonRpcProvider("https://nameless-bitter-emerald.discover.quiknode.pro/3cbfd1794564a54c494f01f9c3d2008ed88860c5/");
        const collection = await provider.send("qn_fetchNFTsByCollection", {
            collection: collectionId,
            page: page,
            perPage: 9
        })
        return collection
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetchCollection()
            .then(data => {
                console.log(data.tokens)
                if (page === 1) {
                    setNFTs(data.tokens)
                } else {
                    setNFTsLo(data.tokens)
                }
                setIsLoading(false)
            })
            .catch(err => setNFTs([]))
    }, [page]);

    const loadMore = () => {
            setPage(page + 1)
            if (page > 1) {
                setNFTs([...nfts, ...nftsLo])
            }
        


    }
    return (
        <div className="live-auctions-area section-padding-100-50 bg-overlay-2 bg-img">
            <div className="container">
                <div className="row">

                    <div className="col-12 text-center">
                        <h6 className="heading-sub">Collection {nfts[0]?.collectionName}</h6>

                    </div>

                    <div className="col-12 text-center">
                        <hr />
                        {nfts[0]?.description}
                        <hr />
                        <h2 className="heading-title">All Items</h2>
                    </div>

                </div>


                <div className="row justify-content-center">
                    {!isLoading && nfts.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>Items not Found</h1>}

                    {nfts.map(token => <NFTCard key={token.name} nft={token} />)}
                </div>
                {nftsLo.length !== 0 || page === 1 ?
                    <div className="col-12">
                        <div className="btn-area mb-50 text-center">
                            <a className="btn btn-box" onClick={() => { loadMore() }}>View on OpenSea</a>
                        </div>
                    </div>

                    : ""}

            </div>
        </div>
    );
}



export default NFTBlock;