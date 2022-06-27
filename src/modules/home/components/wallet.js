import React from "react";
import "./nav.scss";
import { useCookies } from 'react-cookie'
import metamask_img from '../../../assets/images/metamask.png'

const Wallet = () => {
    
    const [cookies, setCookie, removeCookie] = useCookies(['selectedAddress', 'chain_id'])

    if (cookies.selectedAddress){
        return(
            <div>
<div className="wallet-area section-padding-100-50">
                 <div className="container">
                   <div className="row">
           
                     <div className="col-12 text-center">
                       <h6 className="heading-sub">Wallet</h6>
                       <h2 className="heading-title">My NFT`s</h2>
                     </div>
                   </div>
           
                  
                       <div className="single-wallet-area two">
                         <div className="wallet-content-text">
                           <h4><a href="#">NFT wallet is empty</a></h4>
                           <p>consectetur adipisicing elit. Id quisquam, numquam ab deleniti
                             ipsam fugiat.</p>
                         </div>
                       </div>
                     </div>
                 
               </div>

            </div>
        )
        
    }
    else{
        return (<div>
            <div className="wallet-area section-padding-100-50">
                 <div className="container">
                   <div className="row">
           
                     <div className="col-12 text-center">
                       <h6 className="heading-sub">Wallet</h6>
                       <h2 className="heading-title">NFT Wallet</h2>
                     </div>
                   </div>
           
                   <div className="row">
           
                     <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="800">
                       <div className="single-wallet-area two">
           
                         <div className="wallet-image">
                           <img src={metamask_img} alt="" />
                         </div>
           
           
                         <div className="wallet-content-text">
                           <h4><a href="#">Metamask</a></h4>
                           <p>consectetur adipisicing elit. Id quisquam, numquam ab deleniti
                             ipsam fugiat.</p>
                         </div>
                       </div>
                     </div>
           
           
                     <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                       <div className="single-wallet-area two">
           
                         <div className="wallet-image">
                           <img src="img/icon-img/17.png" alt="" />
                         </div>
           
           
                         <div className="wallet-content-text">
                           <h4><a href="#">Bitski</a></h4>
                           <p>consectetur adipisicing elit. Id quisquam, numquam ab deleniti
                             ipsam fugiat.</p>
                         </div>
                       </div>
                     </div>
           
           
                     <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1200">
                       <div className="single-wallet-area two">
           
                         <div className="wallet-image">
                           <img src="img/icon-img/18.png" alt="" />
                         </div>
           
           
                         <div className="wallet-content-text">
                           <h4><a href="#">Fortmatic</a></h4>
                           <p>consectetur adipisicing elit. Id quisquam, numquam ab deleniti
                             ipsam fugiat.</p>
                         </div>
                       </div>
                     </div>
           
           
                     <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1400">
                       <div className="single-wallet-area two">
           
                         <div className="wallet-image">
                           <img src="img/icon-img/19.png" alt="" />
                         </div>
           
           
                         <div className="wallet-content-text">
                           <h4><a href="#">Authereum</a></h4>
                           <p>consectetur adipisicing elit. Id quisquam, numquam ab deleniti
                             ipsam fugiat.</p>
                         </div>
                       </div>
                     </div>
           
                   </div>
                 </div>
               </div>
           
           
             </div>);
    }
  
  }


export default Wallet;