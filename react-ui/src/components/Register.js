import React, { Component } from 'react';
import { Segment, Grid, Header, Form, Button, Message, Label, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { userActions } from '../actions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',

      //validation
      nameError: false,
      emailError: false,
      emailErrorMsg: 'Please provide a valid email address.',
      passwordError: false,
      passwordErrorMsg: 'Password must have at least 8 characters.',
      passwordMatchError: false,
      passwordMatchErrorMsg: 'Password didn`t match.',
      formError: false,
      errorHeader: 'Validation Error',
      errorMessages: [],

      //api
      hasSubmitted: false,
      hasRegistered: false,
      submitMessage: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerApiCall = this.registerApiCall.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let error = false;

    const re = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (!re.test(this.state.email)) {
      this.setState({ emailError: true });
      error = true;
    } else {
      this.setState({ emailError: false });
    }

    if (this.state.password.length < 8) {
      this.setState({ passwordError: true });
      error = true;
    } else {
      this.setState({ passwordError: false });
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ passwordMatchError: true });
      error = true;
    } else {
      this.setState({ passwordMatchError: false });
    }

    if (!error) {
      this.setState({ formError: false });
      this.registerApiCall();
    } else {
      this.setState({ formError: true });
    }
  }

  registerApiCall() {
    const userInfo = Object.assign({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(response => response.json())
      .then(response => {
        console.log('Success', JSON.stringify(response));
        if (response.error) {
          this.setState({
            hasSubmitted: true,
            hasRegistered: false,
            submitMessage: response.error
          });
        } else {
          this.setState({
            hasSubmitted: true,
            hasRegistered: true,
            submitMessage: 'Register Success'
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        this.setState({
          hasSubmitted: true,
          hasRegistered: false,
          submitMessage: 'Register Failed'
        })
      });
  }

  render() {
    let { name,
      email,
      password,
      confirmPassword,
      nameError,
      emailError,
      passwordError,
      passwordMatchError,
      formError,
      emailErrorMsg,
      passwordErrorMsg,
      passwordMatchErrorMsg,
      hasRegistered,
      hasSubmitted,
      submitMessage
    } = this.state;

    let disabledSubmit = !name || !email || !password || !confirmPassword;
    return (
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Register
            </Header>
            <Message hidden={!hasSubmitted} error={!hasRegistered} success={hasRegistered}>
              {submitMessage}
            </Message>
            <Form size='large' onSubmit={this.handleSubmit} error={formError}>
              <Form.Field error={nameError}>
                <Input
                  name='name'
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Full name'
                  onChange={this.handleChange} />
              </Form.Field>
              <Form.Field error={emailError}>
                <Input
                  name='email'
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={this.handleChange} />
                  {emailError ?
                    <Label basic color='red' pointing>{emailErrorMsg}</Label> :
                    ''
                  }
              </Form.Field>
              <Form.Field error={passwordError}>
                <Input
                  name='password'
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange} />
                  {passwordError ?
                    <Label basic color='red' pointing>{passwordErrorMsg}</Label> :
                    ''
                  }
              </Form.Field>
              <Form.Field error={passwordMatchError}>
                <Input
                  name='confirmPassword'
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Confirm Password'
                  type='password'
                  onChange={this.handleChange} />
                  {passwordMatchError ?
                    <Label basic color='red' pointing>{passwordMatchErrorMsg}</Label> :
                    ''
                  }
              </Form.Field>
              <Button fluid size='large' type='submit' disabled={disabledSubmit}>Register</Button>
            </Form>
            <Message>
              Already registered? <Link to='/login'>Log In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default Register;
