import React, { useState } from 'react';
import '../App.css';

import NewEvent from './newEvent'

function Dashboard(){
	const [isHidden, setIsHidden] =useState(true)

	function toggleForm(){
		setIsHidden(!isHidden)
		document.querySelector('.builder').classList.toggle('hidden')
	}

    return (
		<div className='dashboard'>
			<div className='addEvent'>
				<h3>Create your own event? Start here!</h3>
				<button onClick={toggleForm}>Create Event</button>
				<NewEvent />
			</div>
			<div className='event-panel'>
				<h2>Choose your event!</h2>
				{/* <Events /> */}
			</div>
		</div>
    )
}

export default Dashboard;