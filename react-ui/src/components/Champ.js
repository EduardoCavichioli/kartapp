import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, Segment, Dimmer, Loader } from 'semantic-ui-react';

class Champ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      championships: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    if (!this.props.loggedUserID) {
      this.props.history.push('/login');
    } else {
      fetch(`/api/championshipByuser/${this.props.loggedUserID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          championships: json,
          loading: false
        })
      })
      .catch(e => {
        this.setState({
          message: 'api call failed',
          loading: false
        });
      });
    }
  }

  render() {
    return (
      <Segment vertical>
        <Dimmer active={this.state.loading}>
          <Loader>Loading Races</Loader>
        </Dimmer>
        <Card.Group centered>
          {this.state.championships.map(champ => 
            <Card key={champ._id}>
              <Card.Header>{champ.name}</Card.Header>
              <Card.Description>{champ.races.length} races</Card.Description>
            </Card>
          )}
        </Card.Group>
      </Segment>
    )
  }
}

const mapStateToProps = store => ({
  loggedUserID: store.mainState.loggedUserID
});

export default withRouter(connect(mapStateToProps)(Champ));