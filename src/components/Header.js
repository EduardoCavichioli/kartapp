import React, { Component } from 'react';
import { Segment, Menu, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Segment vertical inverted>
      <Menu style={{ marginBottom: 0 }} inverted>
        <Container>
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
          <Menu.Item as={Link} to='/about'>About</Menu.Item>
          <Menu.Item position='right'>
            <Button as={Link} to='/login' inverted>Log In</Button>
          </Menu.Item>
        </Container>
      </Menu>
      </Segment>
    );
  }
}

export default Header;
