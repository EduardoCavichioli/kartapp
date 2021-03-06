import React, { Component } from 'react';
import { Segment, Grid, Header, Form, Button, Message } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
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
    const { history } = this.props;
    this.props.onLoginButton(history, email, password);
    this.setState({
      submitted: true
    });
  }

  render() {
    let { isLogged, loginMessage } = this.props;
    return (
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Log In
            </Header>
            <Message hidden={!this.state.submitted} error={!isLogged} success={isLogged}>
              {loginMessage}
            </Message>
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
  isLogged: store.mainState.isLogged,
  loginMessage: store.mainState.loginMessage
});

const mapDispatchToProps = dispatch => ({
  onLoginButton: (history, email, password) => { dispatch(userActions.loginButton(history, email, password)) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
