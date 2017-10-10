import React from 'react';
import axios from 'axios';
import './Giphy.css';

const GIPHY_API_KEY = 'Zanf7U43Jqk3WiDOdM2iBceSyozUK4VJ'

export default class Giphy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: null
    }
  }

  componentDidMount() {
    axios.get(`https://api.giphy.com/v1/gifs/random`, {
      params: {
        api_key: GIPHY_API_KEY,
        tag: this.props.tag || 'cats',
        rating: 'g'
      }
    }).then(response => {
      const url = response.data.data.image_url
      this.setState({ url })
    })
  }

  render() {
    const isLoaded = this.state.url != null
    const className = isLoaded ? 'Giphy' : 'Giphy pending';
    const content = <img src={this.state.url} alt={this.props.tag} />
    return <div className={className}>{content}</div>
  }
}
