import React from 'react';
const CardTitle = (obj) => {
    const {title} = obj;
    return (
        <div className="ds-cards__wrapper--title">
            {title}
        </div>
      )
}

export default CardTitle;