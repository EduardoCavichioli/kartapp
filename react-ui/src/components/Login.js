import React, { Component } from 'react';
import { Segment, Grid, Header, Form, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { email, password } = this.state;
    this.props.onLoginButton(email, password);
  }

  render() {
    return (
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Log In
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Form.Input
                name='email'
                fluid
                icon='mail'
                iconPosition='left'
                placeholder='E-mail address'
                onChange={this.handleChange} />
              <Form.Input
                name='password'
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.handleChange} />
              <Button fluid size='large' type='submit'>Log In</Button>
            </Form>
            <Message>
              New here? <Link to='/register'>Register now</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = store => ({
  loggedUser: store.mainState.loggedUser
});

const mapDispatchToProps = dispatch => ({
  onLoginButton: (email, password) => { dispatch(userActions.loginButton(email, password)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
