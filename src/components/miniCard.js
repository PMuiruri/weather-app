import React, { Component } from 'react';

class MiniCard extends Component {

  render() {
    console.log(this.props.reading);
    return (
      <div className="mini-card shadow-lg description">
          <p className="font-weight-bold py-2">{this.props.name}</p>
            <i className={this.props.icon}></i>
          <p className="font-weight-bold">{this.props.reading}</p>
      </div>
    );
  }

}

export default MiniCard;
