import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <form className="card card-sm card-form">
        <div className="card-body row no-gutters align-items-center">
          <div className="col-auto">
            <i className="fas fa-search h4 text-body"></i>
          </div>
          <div className="col">
            <input className="form-control search_fild" type="text" name="city" onChange={this.props.handleChange} value={this.props.city} placeholder="Search a City e.g Helsinki" />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-danger search_btn" value="" onSubmit={this.props.handleSubmit} type="submit">Search</button>
          </div>
        </div>
      </form>
    );
  }

}

export default Form;
