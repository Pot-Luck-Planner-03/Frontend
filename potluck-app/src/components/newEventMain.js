import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';
import NewEvent from './newEvent';
import { addFeature } from '../Actions/potluckAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const initialInfo = {
    potluck_name: '',
	potluck_location: '',
	potluck_date: '',
    potluck_time:'',
    potluck_description:'',
    organizer:'',
};

const initialEvents = [];

function NewEventMain(){
    const [newEvent, setNewEvent] = useState(initialInfo);
	const [events, setEvents] = useState(initialEvents)

    const { push } = useHistory();

    const postNewEvent = (newPotluck) => {
        axiosWithAuth()
        .post('/api/potlucks', newPotluck)
        .then((res) => {
			setEvents([...events, res.data])
			setNewEvent(initialInfo)
            push('/dashboard')
		})
		.catch(err => {
			console.log(err)
		})
    }

    const inputChange = (name, value) => {   
        setNewEvent({
          ...newEvent,
          [name]: value,
        });
      };

    const formSubmit = () => {
        const event = {
          potluck_name: newEvent.potluck_name.trim(),
          potluck_location: newEvent.potluck_location.trim(),
          potluck_date: newEvent.potluck_date.trim(),
          potluck_time: newEvent.potluck_time.trim(),
        };
        postNewEvent(event);
        addFeature(event);
      };

    return(
        <NewEvent 
            values={newEvent}
            change={inputChange}
            submit={formSubmit}
        />
    )
}

export default connect(null, { addFeature })(NewEventMain);

// export default NewEventMain;