import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';
import NewEvent from './newEvent';
import { addFeature } from '../Actions/potluckAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const initialInfo = {
    occasion: '',
	location: '',
	date: '',
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
          occassion: newEvent.occassion.trim(),
          location: newEvent.location.trim(),
          date: newEvent.date.trim(),
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

// export default connect(null, { addFeature })(NewEventMain);

export default NewEventMain;