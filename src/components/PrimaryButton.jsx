import React from 'react';

const PrimaryButton = ({text}) => {
    return (
        <button type="submit" className="btn btn-primary rounded-pill">
            {text}
        </button>
    );
}

export default PrimaryButton;
