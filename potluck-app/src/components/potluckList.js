import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PotluckList = () => {
    const [potluckList, setPotluckList] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://potluck-planner-03.herokuapp.com/api/users/:organizer_id/organizer_potlucks`)
        .then((res) => {
          console.log(res.data);
          setPotluckList(res.data);
        })
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <div>
        {potluckList.map((item) => {
          return (
            <div>{item.potluck_name}</div>
          );
        })}
      </div>
    );
  };
  export default PotluckList;