import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <form className="card card-sm card-form" onSubmit={this.props.handleSubmit}>
        <div className="card-body row no-gutters align-items-center">
          <div className="col-auto">
          </div>
          <div className="col">
            <input className="form-control search_fild" type="text" name="city" onChange={this.props.handleChange} value={this.props.city} placeholder="Search a City e.g Helsinki" />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-danger search_btn" onSubmit={this.props.handleSubmit} type="submit">Search</button>
          </div>
        </div>
      </form>
    );
  }

}

export default Form;
