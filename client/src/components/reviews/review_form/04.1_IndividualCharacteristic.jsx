import React, { useState } from 'react';
import ShowRatingDesc from './04.2_ShowRatingDesc.jsx';

const characteristicDescription = {
  Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
};

const IndividualCharacteristic = (props) => {

  const id = props.value.details.id;
  const characteristic = props.value.characteristic;
  const [rating, setRating] = useState({});

  const handleCharacteristicRating = (e) => {
    const characteristicID = e.target.name;
    const rating = e.target.value;
    props.handleOnChange('characteristics', {...props.formDetails.characteristics, [characteristicID]: Number(rating)});
  };

  return (
    <>
      <div key={id} >
        {characteristicDescription[characteristic].map((desc, index) => {
          let rating = index + 1;
          return (
            <span key={`${id}-${desc}-${rating}`} >
              <label htmlFor={`${id}-${rating}`} > {rating} </label>
              <input id={`${id}-${rating}`} name={id} value={rating} type="radio" onChange={handleCharacteristicRating}/>
            </span>
          );
        })}
      </div>
      <ShowRatingDesc characteristic={characteristic} desc={characteristicDescription}/>
    </>
  );
};

export default IndividualCharacteristic;