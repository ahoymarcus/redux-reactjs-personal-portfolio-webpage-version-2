import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setSelectedSection } from '../redux/actions/selectedSectionActions';

// styles
import './InputComponent.css';



const InputComponent = () => {
	const dispatch = useDispatch();
	
	
	const [ search, setSearch ] = useState('');
	
	console.log(search);
	
		
	
	return (
		<div className="input-section-header">
			<h2>Tech Search</h2>
			<div className="input-option">
				<form>
					<input 
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="My techs..."
					/>
				</form>
			</div>
		</div>
	);
};



export default InputComponent;


