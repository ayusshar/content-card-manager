import React from 'react';
const Header = (obj) => {
    const { resetCard } = obj;
    return (
        <div className="ds-header">
            <header className="ds-header__title">Infobip History</header>
            <div className="ds-header__reset" onClick={resetCard}>Reset</div>
        </div>
    )
}

export default Header;