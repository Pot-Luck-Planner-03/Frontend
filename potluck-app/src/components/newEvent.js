import React, { useState } from 'react';
import NewFood from './newFood'
import axios from 'axios';

const initialInfo = {
    occasion: '',
	location: '',
	date: '',
};

const initialEvents = [];


function NewEvent(){
    const [newEvent, setNewEvent] = useState(initialInfo);
	const [events, setEvents] = useState(initialEvents)

    const handleChange = e => {
		setNewEvent({
			...newEvent,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		axios
        .post('https://potluck-planner-03.herokuapp.com/api/potlucks', events)
        .then((res) => {
			setEvents([...events, res.data])
			setNewEvent(initialInfo)
		})
		.catch(err => {
			console.log(err)
		})
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