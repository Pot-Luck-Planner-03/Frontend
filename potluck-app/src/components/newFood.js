import React, { useState } from 'react';
import axios from 'axios';

const initialDishInfo = {
	Dish: '',
	Volunteer: '',
};

function NewFood(){
    const [newFood, setNewFood] = useState(initialDishInfo);

    const handleChange = e => {
		setNewFood({
			...newFood,
			[e.target.name]: e.target.value
		});
	};

    const handleSubmit = e => {
		e.preventDefault();
		axios
        .post('https://potluck-planner-03.herokuapp.com/api/foods', newFood)
        .then((res) => {
          //console.log(res.data);
          setNewFood([...newFood, res.data]);
          setNewFood(initialDishInfo);
          
        })
        .catch((err) => {
          console.log(err);
        });
	};

    return (
		<div className="newFood">
			<div className="foodBuilder hidden">
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