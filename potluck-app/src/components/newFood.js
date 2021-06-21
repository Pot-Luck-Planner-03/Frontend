import React, { useState } from 'react';

const initialInfo = {
	Dish: '',
	Volunteer: '',
};

function NewFood(){
    const [newFood, setNewFood] = useState(initialInfo);

    const handleChange = e => {
		setNewFood({
			...newFood,
			[e.target.name]: e.target.value
		});
	};

    const handleSubmit = e => {
		e.preventDefault();
		// API CALL
	};

    return (
		<div className="newFood">
			<div className="builder">
				<h2>Want to bring a dish?</h2>
				<form onSubmit={handleSubmit} id="event-form">
					<label>
						Dish
						<input
							type="text"
							name="dish"
							id="dish-input"
                            onChange={handleChange}
						/>
					</label>
					<label>
						Your Name
						<input
							type="text"
							name="volunteer"
							id="volunteer-input"
                            onChange={handleChange}
						/>
					</label>
					 
					<div className="submit">
						<button id="newFood-button">Add Food!</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default NewFood