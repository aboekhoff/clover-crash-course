import React from 'react';
import axios from 'axios';

const GIPHY_API_KEY = 'Zanf7U43Jqk3WiDOdM2iBceSyozUK4VJ'

export default class Giphy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: null
    }
  }

  componentDidMount() {

  }

  render() {
    const isLoaded = this.state.url != null

    let content = null

    if (isLoaded) {
      content = <img src={this.state.url} />
    }

    return <div className="giphy">{content}</div>
  }
}
