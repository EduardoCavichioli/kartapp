import React, { Component } from 'react';
import { Segment, Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Segment vertical inverted>
      <Menu style={{ marginBottom: 0 }} inverted>
        <Container>
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
          <Menu.Item as={Link} to='/about'>About</Menu.Item>
        </Container>
      </Menu>
      </Segment>
    );
  }
}

export default Header;
