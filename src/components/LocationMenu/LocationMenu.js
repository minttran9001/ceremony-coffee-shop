import React from "react";
import "./LocationMenu.scss";
import { Controller, Scene } from "react-scrollmagic";
export default function LocationMenu() {
  return (
    <Controller>
      <Scene triggerElement=".locationMenu" triggerHook=".6" classToggle="fade">
        <div className="locationMenu">
          <h6 className="menuTitle">Seasonal Menu</h6>
          <div className="menuContent">
            <div className="menuItem">
              <div className="itemType">
                <h6>Fall Signature Beverages</h6>
                <div className="item">
                  <p className="itemName">
                    Salty Maple Mocha <span> 5.25 / 6</span>
                  </p>
                  <p>
                    Mocha with salted maple. Topped with a sprinkle of smoked
                    sea salt sugar. Want to make it vegan? We recommend oat
                    milk.
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Browned Sugar Pumpkin Latte <span> 6 / 6.5</span>
                  </p>
                  <p>
                    Oat milk latte with roasted sugar and pumpkin sauce. Dusted
                    with house-made pie spice.
                  </p>
                </div>
              </div>
              <div className="itemType">
                <h6>Espresso</h6>
                <div className="item">
                  <p className="itemName">
                    Espresso <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Long Black <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Cortado <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Cappucchino <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Latte <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Mocha <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Americano <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Black Shakerato <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    White Shakerato <span> 3</span>
                  </p>
                </div>
              </div>
              <div className="itemType">
                <h6>Filtered</h6>
                <div className="item">
                  <p className="itemName">
                    Coffee <span> 2.5 / 2.75 / 3.25</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Coffee, Pour Over <span> (market price)</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Nitro Cold Brew <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Cappucchino <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Latte <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Mocha <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Americano <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Black Shakerato <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    White Shakerato <span> 3</span>
                  </p>
                </div>
              </div>
              <div className="itemType">
                <h6>Not Coffee</h6>
                <div className="item">
                  <p className="itemName">
                    Hot Cocoa <span> 2.75 / 3.25</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Chai Latte <span> 4.5 / 5</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Matcha Latte <span> 5 / 5.5</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Song Tea <span> (market price)</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Rishi Black Iced Tea <span> 2.5/3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Hex Ferments Kombucha <span> 4</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="menuItem">
              <div className="itemType">
                <h6>Fall Signature Beverages</h6>
                <div className="item">
                  <p className="itemName">
                    Salty Maple Mocha <span> 5.25 / 6</span>
                  </p>
                  <p>
                    Mocha with salted maple. Topped with a sprinkle of smoked
                    sea salt sugar. Want to make it vegan? We recommend oat
                    milk.
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Browned Sugar Pumpkin Latte <span> 6 / 6.5</span>
                  </p>
                  <p>
                    Oat milk latte with roasted sugar and pumpkin sauce. Dusted
                    with house-made pie spice.
                  </p>
                </div>
              </div>
              <div className="itemType">
                <h6>Espresso</h6>
                <div className="item">
                  <p className="itemName">
                    Espresso <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Long Black <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Cortado <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Cappucchino <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Latte <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Mocha <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Americano <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Black Shakerato <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    White Shakerato <span> 3</span>
                  </p>
                </div>
              </div>
              <div className="itemType">
                <h6>Filtered</h6>
                <div className="item">
                  <p className="itemName">
                    Coffee <span> 2.5 / 2.75 / 3.25</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Coffee, Pour Over <span> (market price)</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Nitro Cold Brew <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Cappucchino <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Latte <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Mocha <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Americano <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Black Shakerato <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    White Shakerato <span> 3</span>
                  </p>
                </div>
              </div>
              <div className="itemType">
                <h6>Not Coffee</h6>
                <div className="item">
                  <p className="itemName">
                    Hot Cocoa <span> 2.75 / 3.25</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Chai Latte <span> 4.5 / 5</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Matcha Latte <span> 5 / 5.5</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Song Tea <span> (market price)</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Rishi Black Iced Tea <span> 2.5/3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Hex Ferments Kombucha <span> 4</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="menuItem">
              <div className="itemType">
                <h6>Breakfast, Lunch + Snacks</h6>
                <div className="item">
                  <p className="itemName">
                    Salty Maple Mocha <span> 5.25 / 6</span>
                  </p>
                  <p>
                    Mocha with salted maple. Topped with a sprinkle of smoked
                    sea salt sugar. Want to make it vegan? We recommend oat
                    milk.
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Browned Sugar Pumpkin Latte <span> 6 / 6.5</span>
                  </p>
                  <p>
                    Oat milk latte with roasted sugar and pumpkin sauce. Dusted
                    with house-made pie spice.
                  </p>
                </div>
              </div>
              <div className="itemType">
                <h6>Espresso</h6>
                <div className="item">
                  <p className="itemName">
                    Espresso <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Long Black <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Cortado <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Cappucchino <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Latte <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Mocha <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Americano <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Black Shakerato <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    White Shakerato <span> 3</span>
                  </p>
                </div>
              </div>
              <div className="itemType">
                <h6>Filtered</h6>
                <div className="item">
                  <p className="itemName">
                    Coffee <span> 2.5 / 2.75 / 3.25</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Coffee, Pour Over <span> (market price)</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Nitro Cold Brew <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Cappucchino <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Latte <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Mocha <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Americano <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Black Shakerato <span> 3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    White Shakerato <span> 3</span>
                  </p>
                </div>
              </div>
              <div className="itemType">
                <h6>Not Coffee</h6>
                <div className="item">
                  <p className="itemName">
                    Hot Cocoa <span> 2.75 / 3.25</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Chai Latte <span> 4.5 / 5</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Matcha Latte <span> 5 / 5.5</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Song Tea <span> (market price)</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Rishi Black Iced Tea <span> 2.5/3</span>
                  </p>
                </div>
                <div className="item">
                  <p className="itemName">
                    Hex Ferments Kombucha <span> 4</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scene>
    </Controller>
  );
}
