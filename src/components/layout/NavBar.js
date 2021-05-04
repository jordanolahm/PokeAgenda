import React, { Component } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import logo from '../../assets/logo.svg'
import competi from '../../assets/competi.svg'
import { Link } from 'react-router-dom'

const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
`;

export default class NavBar extends Component {
  state = {
    hoverNavBar: false
  };

  hoverNavBar() {
    window.scrollY <= 0
      ? this.setState({ hoverNavBar: false })
      : this.setState({ hoverNavBar: true });
  }

  componentDidMount() {
    // Added True To End To Listen to All Events On Page
    window.addEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  componentWillUnmount() {
    // Added True To End To LIsten to All Events On Page
    window.removeEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Branding
          href="#"
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
        >
          <img src={logo} />
        </Branding>
        <Link className="Login-Acess" to="/slider">
          Slider
        </Link>
        <div>
          <input
            className="input"
            type="text"
            placeholder="Search Pokemon"
            onChange={(e) => this.props.setPokeName(e.target.value)}
          ></input>
        </div>
        <Link className="Login-Acess" to="/login">
          Login
        </Link>
        <Branding className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
          <img src={competi} />
        </Branding>
      </nav>
    );
  }
}
