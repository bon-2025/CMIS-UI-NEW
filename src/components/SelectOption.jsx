import React from 'react';

const SelectOption = ({value, property, text}) => {
    return (
        <option value={value} property={property} >{text}</option>
    );
}

export default SelectOption;
