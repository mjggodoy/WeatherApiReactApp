import React from 'react';
import Proptypes from 'prop-types';

function Error({message}) {
    return(
        <div className="card-panel red error col s12">
            {message}
        </div>
    );
}

Error.prototype = {
    message: Proptypes.string.isRequired
}
export default Error;