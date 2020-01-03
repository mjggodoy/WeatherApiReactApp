import React from 'react';

function Error({message}) {
    return(
        <div className="card-panel red error col s12">
            {message}
        </div>
    );
}

export default Error;