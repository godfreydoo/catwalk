import React, { useState, useEffect } from 'react';
import Characteristic from './Characteristic.jsx';

var storeCharacteristicsInArray = (characteristics) => {
  var result = [];
  for (var key in characteristics) {
    var obj = {};
    obj.characteristic = key;
    obj.details = characteristics[key];
    result.push(obj);
  }
  return result;
};

const ProductBreakdown = ({data}) => {

  const characteristics = data.reviewsMeta.characteristics;

  const [listOfCharacteristics, setListOfCharacteristics] = useState(storeCharacteristicsInArray(characteristics));

  return (
    <>
      <div>
        {listOfCharacteristics.map((value, index) => {
          return (
            <div key={value.details.id}>
              <div className="product-breakdown" >
                <Characteristic value={value}/>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductBreakdown;