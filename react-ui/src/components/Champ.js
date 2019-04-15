import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Champ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      championships: []
    }
  }

  componentDidMount() {
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
          championships: json
        })
      })
      .catch(e => {
        this.setState({
          message: 'api call failed'
        });
      });
    }
  }

  render() {
    console.log(this.state.championships);
    return (
      <div>
        {this.state.championships.map(champ => {
          return <span key={champ._id}>{champ.name}</span>
        })}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  loggedUserID: store.mainState.loggedUserID
});

export default withRouter(connect(mapStateToProps)(Champ));