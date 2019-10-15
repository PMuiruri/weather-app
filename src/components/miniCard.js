import React, { Component } from 'react';

class MiniCard extends Component {

  render() {
    return (
      <div className="mini-card shadow-lg align-middle">
          <p className="font-weight-bold py-2">{this.props.name}</p>
            <i className={this.props.icon}></i>
          <h1 className="font-weight-bold py-2">{this.props.reading}</h1>
      </div>
    );
  }

}

export default MiniCard;
