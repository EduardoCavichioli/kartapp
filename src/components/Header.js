import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Menu inverted style={{ marginBottom: 0 }} >
        <Container>
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/about'>About</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Header;
