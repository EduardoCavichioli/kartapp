import React, { Component } from 'react';
import { Segment, Grid, Header, Form, Button, Message } from 'semantic-ui-react';
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
      passwordError: false,
      confirmPasswordError: false,
      passwordMatchError: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let error = false;

    const userInfo = Object.assign({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });

    console.log(userInfo);
  
    
  
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(response => console.log('Success', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

  }

  render() {
    let { name, 
          email, 
          password, 
          confirmPassword,
          nameError,
          emailError,
          passwordError,
          confirmPasswordError,
          passwordMatchError
        } = this.state;

    let disabledSubmit = !name || !email || !password || !confirmPassword;
    return (
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Register
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Form.Input
                name='name'
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Full name'
                onChange={this.handleChange} 
                error = {nameError} />
              <Form.Input
                name='email'
                fluid
                icon='mail'
                iconPosition='left'
                placeholder='E-mail address'
                onChange={this.handleChange}
                error={emailError} />
              <Form.Input
                name='password'
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
                error={passwordError || passwordMatchError} />
              <Form.Input
                name='confirmPassword'
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
                onChange={this.handleChange}
                error={confirmPasswordError || passwordMatchError} />
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
