/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ property1 }) => {
  return (
    <div className="frame">
      {["variant-2", "variant-3"].includes(property1) && (
        <>
          <div className="text-wrapper">Home</div>
          <div className="div">Restaurants</div>
          <div className="text-wrapper-2">Sign In</div>
          <img
            className="KHANI-HO-LOGO"
            alt="Khani HO LOGO"
            src="https://c.animaapp.com/zN9KQ6Wm/img/khani-ho-logo-1-3@2x.png"
          />
          <div className={`overlap ${property1}`}>
            {property1 === "variant-2" && (
              <>
                <div className="overlap-group">
                  <div className="overlap-2">
                    <p className="khani-ho">
                      <span className="span">Khani</span>
                      <span className="text-wrapper-3"> ho ?</span>
                    </p>
                    <p className="p">A hassle free online food delivery.</p>
                    <img className="main-pic" alt="Main pic" src="https://c.animaapp.com/zN9KQ6Wm/img/main-pic-1.png" />
                    <div className="sub">
                      <img
                        className="pngwing"
                        alt="Pngwing"
                        src="https://c.animaapp.com/zN9KQ6Wm/img/pngwing-4-1@2x.png"
                      />
                      <img className="img" alt="Pngwing" src="https://c.animaapp.com/zN9KQ6Wm/img/pngwing-5-1@2x.png" />
                      <img
                        className="pngwing-2"
                        alt="Pngwing"
                        src="https://c.animaapp.com/zN9KQ6Wm/img/pngwing-6-1@2x.png"
                      />
                    </div>
                    <div className="smoke">
                      <img className="MERP" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
                      <img className="MERP-2" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
                      <img className="MERP-3" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
                      <img className="MERP-4" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
                    </div>
                    <p className="what-we-OFFER">
                      <span className="text-wrapper-3">What we </span>
                      <span className="span">OFFER ?</span>
                    </p>
                  </div>
                  <p className="text-wrapper-4">We are waiting for your order !!</p>
                  <div className="search">
                    <div className="overlap-group-2">
                      <div className="rectangle" />
                      <div className="rectangle-2" />
                      <img
                        className="prime-search"
                        alt="Prime search"
                        src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-1.svg"
                      />
                      <div className="text-wrapper-5">Type here to search</div>
                    </div>
                  </div>
                  <div className="text-wrapper-6">(search restaurant or food)</div>
                  <div className="overlap-3">
                    <div className="text-wrapper-7">We satisfy</div>
                    <div className="text-wrapper-8">Your</div>
                    <div className="text-wrapper-9">Hunger</div>
                    <div className="ellipse" />
                  </div>
                </div>
                <div className="overlap-4">
                  <div className="text-wrapper-10">No delivery</div>
                  <div className="text-wrapper-11">Charge</div>
                </div>
                <img
                  className="black-wallet-with"
                  alt="Black wallet with"
                  src="https://c.animaapp.com/zN9KQ6Wm/img/black-wallet-with-money-1@2x.png"
                />
                <div className="overlap-5">
                  <div className="text-wrapper-12">24/7</div>
                  <img className="call" alt="Call" src="https://c.animaapp.com/zN9KQ6Wm/img/call-1@2x.png" />
                </div>
                <div className="text-wrapper-13">Service</div>
                <div className="overlap-6">
                  <img
                    className="scooter-with"
                    alt="Scooter with"
                    src="https://c.animaapp.com/zN9KQ6Wm/img/scooter-with-delivery-bag-1@2x.png"
                  />
                  <div className="text-wrapper-14">Fast Delivery</div>
                </div>
              </>
            )}

            {property1 === "variant-3" && (
              <>
                <p className="khani-ho-2">
                  <span className="span">Khani</span>
                  <span className="text-wrapper-3"> ho ?</span>
                </p>
                <p className="text-wrapper-15">A hassle free online food delivery.</p>
              </>
            )}
          </div>
        </>
      )}

      {["default", "variant-3"].includes(property1) && (
        <div className={`home property-1-${property1}`}>
          {property1 === "default" && <>Home</>}

          {property1 === "variant-3" && <p className="text-wrapper-30">We are waiting for your order !!</p>}
        </div>
      )}

      {property1 === "variant-3" && (
        <>
          <div className="overlap-group-3">
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="text-wrapper-16">Type here to search</div>
            <div className="text-wrapper-17">(search restaurant or food)</div>
          </div>
          <img
            className="prime-search-2"
            alt="Prime search"
            src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png"
          />
        </>
      )}

      {["variant-2", "variant-3"].includes(property1) && <div className="text-wrapper-18">Cart</div>}

      {property1 === "variant-3" && (
        <>
          <img className="main-pic-2" alt="Main pic" src="https://c.animaapp.com/zN9KQ6Wm/img/main-pic-3.png" />
          <div className="sub-2">
            <img className="pngwing-3" alt="Pngwing" src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png" />
            <img className="pngwing-4" alt="Pngwing" src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png" />
            <img className="pngwing-5" alt="Pngwing" src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png" />
          </div>
          <div className="smoke-2">
            <img className="MERP-5" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
            <img className="MERP-6" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
            <img className="MERP-7" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
            <img className="MERP-8" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
          </div>
        </>
      )}

      {["default", "variant-3"].includes(property1) && (
        <div className={`restaurants property-1-0-${property1}`}>
          {property1 === "default" && <>Restaurants</>}

          {property1 === "variant-3" && (
            <>
              <p className="span-wrapper">
                <span className="text-wrapper-3">What we </span>
              </p>
              <p className="span-wrapper">
                <span className="span">OFFER ?</span>
              </p>
            </>
          )}
        </div>
      )}

      {property1 === "variant-3" && (
        <>
          <div className="overlap-group-4">
            <div className="text-wrapper-19">No delivery</div>
            <div className="text-wrapper-20">Charge</div>
          </div>
          <img
            className="black-wallet-with-2"
            alt="Black wallet with"
            src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png"
          />
          <div className="text-wrapper-21">24/7</div>
          <img className="call-2" alt="Call" src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png" />
          <div className="text-wrapper-22">Service</div>
          <img
            className="scooter-with-2"
            alt="Scooter with"
            src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png"
          />
          <div className="text-wrapper-23">Fast Delivery</div>
        </>
      )}

      {property1 === "default" && (
        <>
          <div className="text-wrapper-24">Sign In</div>
          <img
            className="KHANI-HO-LOGO-2"
            alt="Khani HO LOGO"
            src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png"
          />
          <div className="overlap-7">
            <p className="khani-ho-2">
              <span className="span">Khani</span>
              <span className="text-wrapper-3"> ho ?</span>
            </p>
            <p className="text-wrapper-15">A hassle free online food delivery.</p>
          </div>
          <p className="text-wrapper-25">We are waiting for your order !!</p>
          <div className="overlap-group-3">
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="text-wrapper-16">Type here to search</div>
            <div className="text-wrapper-17">(search restaurant or food)</div>
          </div>
          <img
            className="prime-search-3"
            alt="Prime search"
            src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png"
          />
          <div className="text-wrapper-26">Cart</div>
          <img className="main-pic-3" alt="Main pic" src="https://c.animaapp.com/zN9KQ6Wm/img/main-pic-3.png" />
          <div className="sub-2">
            <img className="pngwing-6" alt="Pngwing" src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png" />
            <img className="pngwing-7" alt="Pngwing" src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png" />
            <img className="pngwing-8" alt="Pngwing" src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png" />
          </div>
          <div className="smoke-2">
            <img className="MERP-9" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
            <img className="MERP-10" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
            <img className="MERP-11" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
            <img className="MERP-12" alt="Merp" src="https://c.animaapp.com/zN9KQ6Wm/img/merp-15.gif" />
          </div>
          <p className="what-we-OFFER-2">
            <span className="text-wrapper-3">What we </span>
            <span className="span">OFFER ?</span>
          </p>
          <div className="overlap-group-4">
            <div className="text-wrapper-19">No delivery</div>
            <div className="text-wrapper-20">Charge</div>
          </div>
          <img
            className="black-wallet-with-3"
            alt="Black wallet with"
            src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png"
          />
          <div className="text-wrapper-21">24/7</div>
          <img className="call-3" alt="Call" src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png" />
          <div className="text-wrapper-22">Service</div>
          <img
            className="scooter-with-3"
            alt="Scooter with"
            src="https://c.animaapp.com/zN9KQ6Wm/img/prime-search-3@2x.png"
          />
          <div className="text-wrapper-23">Fast Delivery</div>
          <div className="text-wrapper-27">We satisfy</div>
          <div className="text-wrapper-28">Your</div>
          <div className="text-wrapper-29">Hunger</div>
        </>
      )}
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
