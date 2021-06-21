import React, { useState } from 'react';
import NewFood from './newFood'

const initialInfo = {
    occasion: '',
	location: '',
	date: '',
};

function NewEvent(){
    const [newEvent, setNewEvent] = useState(initialInfo);

    const handleChange = e => {
		setNewEvent({
			...newEvent,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		// API CALL
	};

    return (
		<div className="newEvent">
			<div className="builder">
				<h2>Add a new Event!</h2>
				<form onSubmit={handleSubmit} id="event-form">
                    <label>
                        Event Name
                        <input 
                            type="text"
							name="occasion"
							id="occasion-input"
                            onChange={handleChange}
                        />
                    </label>
					<label>
						Location
						<input
							type="text"
							name="location"
							id="location-input"
                            onChange={handleChange}
						/>
					</label>
					<label>
						Date
						<input
							type="date"
							name="Date"
							id="date-input"
                            onChange={handleChange}
						/>
					</label>
					 
					<div className="submit">
						<button id="newEvent-button">Add Event!</button>
					</div>
				</form>
                <NewFood />
			</div>
		</div>
	);
}

export default NewEvent;