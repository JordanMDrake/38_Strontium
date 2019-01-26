import React from 'react';

const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', border: 'none', height: 600}}>
            {props.children}
        </div>
    )
}

export default Scroll;