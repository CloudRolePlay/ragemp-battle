
import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import InputRange from "react-input-range";

export default class Cart extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        count: 1,
    };
  }

  buyFish() {
      // mp.trigger('buy:item', this.props.itemActive.id, this.state.count, (this.state.count * this.props.itemActive.price))
  }

  closeWindow() {
      // mp.trigger('close:window')
  }

    render() {
        if (this.props.itemActive) {
        return (
            <div className="cart">
            <img src={logo} />
            <p className="selected-view-item-txt">Выбранный вид:</p>
            <p className="selected-view-item">{this.props.itemActive.name}</p>
            <div className="info-value-for-sell">
              <p className="count-for-sell-item">Количество:</p>
              <div className="input-for-item">
                <InputRange
                  minValue={1}
                  maxValue={this.props.itemActive.count}
                  step={1}
                  onChange={(value) => this.setState({count: value})}
                  value={this.state.count}
                />
                <div className="block-value">{this.state.count}</div>
              </div>
            </div>
            <div className="info-value-for-sell info-for-sell-cash">
              <p className="count-for-sell-item">Сумма выплаты:</p>
              <p className="value-for-cash">${this.state.count * this.props.itemActive.price}</p>
              <div className="button-for-sell-items" onClick={this.buyFish.bind(this)}>Продать рыбу</div>
            </div>
            <div className="button-for-close-window" onClick={this.closeWindow.bind(this)}>Закрыть</div>
          </div>
        )
    } if (this.props.itemActive != null) {
        return (
            <div className="cart">
            <img src={logo} />
          </div>
        )
    }
}
}