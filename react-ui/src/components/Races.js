import React, { Component } from 'react';
import { Segment, Menu, Header, Grid } from 'semantic-ui-react';

class Races extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: { name: '' }
		}

		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(event, race) {
		this.setState({
			activeItem: race
		});
	}

	render() {
		let { activeItem } = this.state;
		let { races, champName } = this.props;
		return (
			<Segment vertical>
				{(races.length > 0) ?
					<Grid container>
						<Grid.Row>
							<Grid.Column>
								<Header>{champName}</Header>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column width={4}>
								<Menu pointing vertical fluid>
									{races.map(race =>
										<Menu.Item
											key={race.name}
											name={race.name}
											active={activeItem.name === race.name}
											onClick={(e) => this.handleItemClick(e, race)}
										/>
									)}
								</Menu>
							</Grid.Column>
							<Grid.Column stretched width={12}>
								{activeItem.name}
							</Grid.Column>
						</Grid.Row>
					</Grid> :
					<Header textAlign='center'>No races for this championship</Header>
				}
			</Segment>
		)
	}
}

export default Races;