import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios/index.js';
import '../styles/Create.css';
import { enviroment } from '../helpers/.env';

function Create() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [checkbox, setCheckbox] = useState(false);

	const postData = () => {
		axios
			.post(enviroment.MOCK_API_URL + 'TestingData', {
				firstName,
				lastName,
				checkbox,
			})
			.then(() => {
				window.history.back();
			});
	};

	return (
		<div>
			<Form className='create-form'>
				<Form.Field>
					<label>First Name</label>
					<input placeholder='First Name' onChange={(element) => setFirstName(element.target.value)} />
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input placeholder='Last Name' onChange={(element) => setLastName(element.target.value)} />
				</Form.Field>
				<Form.Field>
					<Checkbox
						label='I agree to the Terms and Conditions'
						onChange={(element) => setCheckbox(!checkbox)}
					/>
				</Form.Field>
				<Button type='submit' onClick={postData}>
					Submit
				</Button>
			</Form>
			<Link to='/api/read'>
				<Button>Go Back</Button>
			</Link>
		</div>
	);
}

export default Create;
