/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react"
import { Display } from "./Display"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: "London"
    }
  }

  changeCity = () => {
    this.setState({
      city: this.state.city === "London" ? "New York" : "London"
    })
  }

  render = () => <Display value={this.state.city} callback={this.changeCity} />
}
