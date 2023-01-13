import React from 'react';

export default class BlogHeader extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <div >
        <img src={require("../logoImage.jpg")} alt="logo" width={50} height={50} />
          <a className="navbar-brand" href="#" >Home</a>
          <a className="navbar-brand" href="#">About</a>
          <a className="navbar-brand" href="#">All Blogs</a>
        </div>
  
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <a class="navbar-brand" href="#">Login</a>
        </div>
      </nav>
      );
    }
  }
  