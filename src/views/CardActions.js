import React from 'react';
const CardActions = (actions) => {
    const {deleteCard, openCard, printCard} = actions;
    return (
        <div className="ds-cards__wrapper--actions">
            <button title="OPEN" className="open" onClick={openCard}></button>
            <button title="DELETE" className="delete" onClick={deleteCard}></button>
            <button title="PRINT" className="print" onClick={printCard}></button>
        </div>
      )
}

export default CardActions;