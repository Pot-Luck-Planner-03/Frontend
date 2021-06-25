import React, { useState } from 'react';
import NewFood from './newFood'

function NewEvent(props){
	const { values, submit, change } = props;

	const [isHidden, setIsHidden] =useState(true)

	function toggleForm(){
		setIsHidden(!isHidden)
		document.querySelector('.foodBuilder').classList.toggle('hidden')
	}

	function cancelForm(){
		setIsHidden(true)
		document.querySelector('.builder').classList.add('hidden')
	}

    const handleChange = e => {
		const { name, value } = e.target;
		change(name, value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		submit();

	};
	console.log(props)
    return (
		<div className="newEvent">
			<div className="builder hidden">
				<h2>Add a new Event!</h2>
				<form onSubmit={handleSubmit} id="event-form">
                    <label>
                        Event Name
                        <input 
                            type="text"
							name="occasion"
							id="occasion-input"
                            onChange={handleChange}
							value={values.occasion}
                        />
                    </label>
					<label>
						Location
						<input
							type="text"
							name="location"
							id="location-input"
                            onChange={handleChange}
							value={values.location}
						/>
					</label>
					<label>
						Date
						<input
							type="date"
							name="date"
							id="date-input"
                            onChange={handleChange}
							value={values.date}
						/>
					</label>
					 
					<div className="submit">
						<button id="newEvent-button">Add Event!</button>
					</div>
				</form>
				<button onClick={toggleForm}>
					Bring a dish!
				</button>
                <NewFood />
				<button onClick={cancelForm}>Cancel</button>
			</div>
		</div>
	);
}

export default NewEvent;