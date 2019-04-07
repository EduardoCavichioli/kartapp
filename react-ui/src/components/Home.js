import React, { Component } from 'react';
import { Segment, Header, Button, Grid, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import homeImage from '../images/homeImage.jpeg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  componentDidMount() {
    fetch('/api')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(json => {
      this.setState({
        message: json.message
      });
    })
    .catch(e => {
      this.setState({
        message: 'api call failed'
      });
    });
  }

  render() {
    return (
      <Container fluid>
        <Segment textAlign='center' inverted vertical>
          <Header as='h2' style={{ fontSize: '3em' }}>
            KartApp
        </Header>
          <Header as='h3'>
            A tool to manage your kart races
        </Header>
          <Button as={Link} to='/about' primary size='large'>Learn how</Button>
        </Segment>

        <Segment style={{ padding: '4em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Help Racing Drivers {this.state.message}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your racing team the ability to track races.
                  You can share your results and be smug about it.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Make Your FriendShip Sink
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes, that's right. You thought it was only dreams, but even friends can fight over races results.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src={homeImage} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge' as={Link} to='/'>Register Now</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em'}} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em '}}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "I'm not designed to come second
                  or third, I am designed to win."
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Ayrton Senna
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em '}}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "Being second is to be the first of the ones who lose."
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Ayrton Senna
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

      </Container>
    );
  }
}

export default Home;
