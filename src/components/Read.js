import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { enviroment } from '../helpers/.env';
import { Link } from 'react-router-dom';
import axios from 'axios/index.js';

function Read() {
	const [APIData, setAPIData] = useState([]);
	useEffect(() => {
		axios.get(enviroment.MOCK_API_URL + 'TestingData').then((response) => {
			setAPIData(response.data);
		});
	}, []);

	const setData = (data) => {
		let { id, firstName, lastName, checkbox } = data;
		localStorage.setItem('ID', id);
		localStorage.setItem('First_Name', firstName);
		localStorage.setItem('Last_Name', lastName);
		localStorage.setItem('Checkbox', checkbox);
	};
	const onDelete = (id) => {
		axios.delete(enviroment.MOCK_API_URL + `TestingData/${id}`).then(() => {
			getData();
		});
	};

	const getData = () => {
		axios.get(enviroment.MOCK_API_URL + 'TestingData').then((getData) => {
			setAPIData(getData.data);
		});
	};
	return (
		<div>
			<Table singleLine>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>First Name</Table.HeaderCell>
						<Table.HeaderCell>Last Name</Table.HeaderCell>
						<Table.HeaderCell>Checked</Table.HeaderCell>
						<Table.HeaderCell>Update</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{APIData.map((data) => {
						return (
							<Table.Row>
								<Table.Cell>{data.firstName}</Table.Cell>
								<Table.Cell>{data.lastName}</Table.Cell>
								<Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
								<Link to='/api/update'>
									<Table.Cell>
										<Button onClick={() => setData(data)}>Update</Button>
									</Table.Cell>
								</Link>
								<Table.Cell>
									<Button onClick={() => onDelete(data.id)}>Delete</Button>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
			<Link to='/api/create'>
				<Button>Create</Button>
			</Link>
		</div>
	);
}

export default Read;
