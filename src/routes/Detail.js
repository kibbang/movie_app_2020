import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props
    if(location.state === undefined) {
      history.push('/')
    }
  }
  render() {
    const { location } = this.props
    return (
      <div className="detail">
        <img src={location.state.poster} alt={location.state.title} />
        <h4>{location.state.title}</h4>
        <p>{location.state.summary}</p>
      </div>
    )
  }
}

export default Detail