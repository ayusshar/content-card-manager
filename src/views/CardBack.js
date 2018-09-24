import React from 'react';
const CardBack = (obj) => {
    const {full} = obj;
    return (
        <div className="ds-cards__wrapper--back">
            {full}
        </div>
      )
}

export default CardBack;