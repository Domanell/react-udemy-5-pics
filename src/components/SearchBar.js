import { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(term);
	};

	const handleInputChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<label htmlFor="search">Image Search </label>
				<input type="text" id="search" value={term} onChange={handleInputChange} />
			</form>
		</div>
	);
}

export default SearchBar;
