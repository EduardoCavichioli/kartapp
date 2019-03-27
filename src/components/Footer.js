import React, { Component } from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4'>Links</Header>
                <List link inverted>
                  <List.Item as={Link} to='/'>Home</List.Item>
                  <List.Item as={Link} to='/about'>About</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={13}>
                <Header as='h4' inverted>
                  KartApp
                </Header>
                <p>
                  Thanks for using KartApp.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
