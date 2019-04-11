import React, { Component } from 'react';
import { Segment, Menu, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(event) {
    event.preventDefault();
    this.props.onLogoutButton();
  }

  render() {
    let { loginMessage, isLogged } = this.props;
    return (
      <Segment vertical inverted>
        <Menu style={{ marginBottom: 0 }} inverted>
          <Container>
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/about'>About</Menu.Item>
            {(isLogged) ?
              <Menu.Item position='right'>
                <span>Hello {loginMessage}</span>
                <Button inverted onClick={this.handleLogOut} style={{ marginLeft: '0.5em' }}>
                  Log Out
                </Button>
              </Menu.Item>
              :
              <Menu.Item position='right'>
                <Button as={Link} to='/login' inverted>
                  Log In
                </Button>
                <Button as={Link} to='/register' inverted primary style={{ marginLeft: '0.5em' }}>
                  Register
                </Button>
              </Menu.Item>
            }
          </Container>
        </Menu>
      </Segment>
    );
  }
}

const mapStateToProps = store => ({
  loggedUser: store.mainState.loggedUser,
  isLogged: store.mainState.isLogged,
  loginMessage: store.mainState.loginMessage
});

const mapDispatchToProps = dispatch => ({
  onLogoutButton: () => dispatch(userActions.logoutButton())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
