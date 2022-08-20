import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios/index.js';
import '../styles/Create.css';
import { enviroment } from '../helpers/.env';
function Update() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [checkbox, setCheckbox] = useState(false);
	const [id, setID] = useState(null);
	let navigate = useNavigate();

	useEffect(() => {
		setID(localStorage.getItem('ID'));
		setFirstName(localStorage.getItem('First_Name'));
		setLastName(localStorage.getItem('Last_Name'));
		setCheckbox(localStorage.getItem('Checkbox'));
	}, []);
	const updateAPIData = () => {
		axios
			.put(enviroment.MOCK_API_URL + `TestingData/${id}`, {
				firstName,
				lastName,
				checkbox,
			})
			.then(() => {
				navigate('../api/read');
			});
	};

	return (
		<div>
			<Form className='create-form'>
				<Form.Field>
					<label>First Name</label>
					<input
						placeholder='First Name'
						value={firstName}
						onChange={(element) => setFirstName(element.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						placeholder='Last Name'
						value={lastName}
						onChange={(element) => setLastName(element.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<Checkbox
						label='I agree to the Terms and Conditions'
						checked={checkbox}
						onChange={(element) => setCheckbox(!checkbox)}
					/>
				</Form.Field>
				<Button type='submit' onClick={updateAPIData}>
					Update
				</Button>
			</Form>
			<Link to='/api/read'>
				<Button>Go Back</Button>
			</Link>
		</div>
	);
}

export default Update;
