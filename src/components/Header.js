import React from 'react';
import Proptypes from 'prop-types';

function Header({title}) {
    return(
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{title}</a>
            </div>
        </nav>
    );
}

Header.prototype = {
    title: Proptypes.string.isRequired
}
export default Header;