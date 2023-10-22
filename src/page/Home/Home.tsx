import React from "react";
import { Footer } from "../../layout/Footer";


export const Home: React.FC = () => {
    return (
        <><section className="whyus">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="main_title white">Why WalRES?</h2>
                        <p>
                            Been a dumber to Copy code from Youtube to deploy a Token and got Recked?
                            Approved and Minted an NFT to find your wallet Emptied?
                            I too had the same problem as you.  Since then, we can offer our experience,
                            know-how and toolkit to help you recover your wallets.
                        </p>
                        <div className="dots">
                            <div className="orange_dot inner_dots"></div>
                            <div className="white_dot inner_dots"></div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ width: "80%", margin: 'auto' }}>
                    <div className="text-info-section">
                        <div className="block-card">
                            <div className="card">
                                <div className="img">
                                    <img src="/img/icon-coins/bitcoin.svg" alt="" />
                                    <img src="/img/icons/avax.svg" alt="" />
                                    <img src="/img/icon-coins/pol.svg" alt="" />
                                    <img src="/img/icon-coins/shiba.svg" alt="" />
                                    <img src="/img/icons/binance.svg" alt="" />
                                    <img src="/img/icon-coins/solana.svg" alt="" />
                                    <img src="/img/icon-coins/usdr.svg" alt="" />
                                    <img src="/img/icon-coins/tron.svg" alt="" />
                                </div>
                                <p className="title">
                                    We can recover any Token
                                </p>
                                <p className="text">
                                    Walres can recover any leftover ERC20, NFT in your wallet along with reuniting your ENS domain with a new wallet.
                                </p>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src="/img/section/coin.svg" alt="" />
                                </div>
                                <p className="title">
                                    Wallet Hacks and Crypto scams are common
                                </p>
                                <p className="text">
                                    Based on our own experience and from number of trial and errors, we have developed our own toolkit that enables us to recover crypto wallets in a few steps.

                                </p>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src="/img/section/coin.svg" alt="" />
                                </div>
                                <p className="title">
                                    Crypto is a Trustless Network
                                </p>
                                <p className="text">
                                    Crypto is not a governed body and hence its a trustless network, and people should be aware of the consequences before attempting anything.
                                </p>
                            </div>
                        </div>
                        <div className="paragraph">

                            <h1>How we can help you</h1>
                            <p>
                                We can now offer our experience, know-how and toolkit to help in similar situations,
                                but we don't want to promise too much and we won't always be able to succeed. But we will do our best.
                            </p>
                        </div>
                        <div className="footer-block">
                            <div className="block">
                                <img src="/img/section/time.svg" alt="" />
                                <p>Timebound Operation</p>
                            </div>
                            <div className="block">
                                <img src="/img/section/transaction.svg" alt="" />
                                <p>Fixed fee</p>
                            </div>
                            <div className="block">
                                <img src="/img/section/close.svg" alt="" />
                                <p>Complete Recovery</p>
                            </div>
                            <div className="block">
                                <img src="/img/section/dallar.svg" alt="" />
                                <p>ERC20/NFT/ENS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/img/Ellipse.svg" className="curve_border" alt="Ellipse" />
            <div className="grey_circle"></div>
        </section>

            <Footer />
        </>
    );
};
