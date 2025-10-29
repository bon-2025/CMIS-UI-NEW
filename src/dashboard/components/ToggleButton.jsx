import React from 'react';

const ToggleButton = ({classname, onclick, title, children, style}) => {
    return (
        <div className={classname} style={style} onclick={onclick} title={title}>
            {children}
        </div>
    );
}

export default ToggleButton;
