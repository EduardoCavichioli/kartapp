import React, { Component } from 'react';
import { Grid, Segment, Header, List, Image } from 'semantic-ui-react';
import aboutImage from '../images/aboutImage.jpeg';

class About extends Component {
  render() {
    return (
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle' >
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Track Your Races
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                With this system you can track all races from your championship.
              </p>
              <p style={{ fontSize: '1.33em' }}>
                You can save all information related to your races and share with your friends.
                This way everybody will know whi is the best racing driver.
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                System Features
              </Header>
              <List bulleted size='huge'>
                <List.Item>Insert lap times</List.Item>
                <List.Item>Insert racers</List.Item>
                <List.Item>Manage championship</List.Item>
                <List.Item>Race statistics</List.Item>
                <List.Item>Share racing data</List.Item>
                <List.Item>Point System</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src={aboutImage} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Header as='h3' style={{ fontSize: '2em' }}>Investment</Header>
              <p style={{ fontSize: '1.33em' }}>
                Now you must be wondering. How much I will have to pay to use this amazing tool...
                The BEST part is, NOTHING AT ALL!!!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default About;
