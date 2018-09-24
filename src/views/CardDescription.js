import React from 'react';
const CardDescription = (obj) => {
    const {desc} = obj;
    return (
        <div className="ds-cards__wrapper--desc">
            {desc}
        </div>
      )
}

export default CardDescription;