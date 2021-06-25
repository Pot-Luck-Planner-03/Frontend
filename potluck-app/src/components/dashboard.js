import React, { useState } from 'react';
import '../App.css';

import NewEventMain from './newEventMain'

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
				<NewEventMain />
			</div>
			<div className='event-panel'>
				<h2>Choose your event!</h2>
				{/* <Events /> */}
			</div>
		</div>
    )
}

export default Dashboard;