import "./assets/css/fish-sell.css";
import "./assets/css/fonts.css";
import React, { useState } from "react";
import FishItems from "./components/fish";
import SeaFoodItems from "./components/seaFood";
import Cart from "./components/cart";

export default class FishSell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFish: true,
      value: 20,
      activeItem: false,
    };
  }

  changeSection(id) {
    if (id === 1) {
      this.setState({ activeFish: true });
    }
    if (id === 2) {
      this.setState({ activeFish: false });
    }
  }

  setActiveItem = (item) => {
    this.setState({ activeItem: item });
  };

  render() {
    return (
      <div className="fish-sell">
        <main>
          <div className="list-sections">
            <div
              onClick={() => this.changeSection(1)}
              className={
                this.state.activeFish
                  ? "button-for-list-section-active"
                  : "button-for-list-section"
              }
            >
              Рыбы
            </div>
            <div
              onClick={() => this.changeSection(2)}
              className={
                this.state.activeFish
                  ? "button-for-list-section"
                  : "button-for-list-section-active"
              }
            >
              Морепродукты
            </div>
          </div>
          <div
            className={this.state.activeFish ? "list-fish-items" : "dspnone"}
          >
            <FishItems
              item={this.setActiveItem}
              active={this.state.activeFish}
            />
          </div>
          <div
            className={
              this.state.activeFish ? "dspnone" : "list-sea-food-items"
            }
          >
            <SeaFoodItems
              item={this.setActiveItem}
              active={this.state.activeFish}
            />
          </div>
        </main>
        <Cart itemActive={this.state.activeItem} />
      </div>
    );
  }
}
