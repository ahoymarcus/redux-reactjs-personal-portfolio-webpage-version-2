import React from 'react';
import { useSelector } from 'react-redux';




const SearchComponent = () => {
	const search = useSelector((state) => state.searchTerm);
	console.log('search term', search);
	
	
	return (
		<>
			search component
		</>
	);
};



export default SearchComponent;



